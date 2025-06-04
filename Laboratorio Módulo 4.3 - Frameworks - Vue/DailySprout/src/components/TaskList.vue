<script setup lang="ts">
import { useTasksStore } from '@/stores/tasks'
import type { Task } from '@/types'
import CustomStatusDropdown from '@/common/CustomStatusDropdown.vue'

const tasks = useTasksStore()

tasks.$subscribe((_mutation, state) => {
  localStorage.setItem('tasks', JSON.stringify(state.tasks))
})

const getTaskImage = (task: Task) => {
  if (task.status === 'Just started!') return '/sprouts/sprout1.png'
  if (task.status === 'In progress!') return '/stems/stem1.png'
  return task.selectedFlower
}

const handleStatusChange = (id: string, newStatus: Task['status']) => {
  tasks.updateTask({ id, status: newStatus })
}
</script>

<template>
  <div>
    <ul class="task-list" v-if="tasks.tasks.length > 0">
      <li class="task-container" v-for="task in tasks.tasks" :key="task.id">
        <span :style="{ textDecoration: task.status === 'Completed!' ? 'line-through' : 'none' }">{{
          task.title
        }}</span>
        <div class="task-image">
          <img :src="getTaskImage(task)" :alt="task.title" />
        </div>
        <CustomStatusDropdown
          v-model="task.status"
          :options="['Just started!', 'In progress!', 'Completed!']"
          @update:modelValue="
            (newStatus: string) => handleStatusChange(task.id, newStatus as Task['status'])
          "
        />
        <button class="pixel-button delete" @click="tasks.deleteTask(task.id)">Delete</button>
      </li>
    </ul>

    <p v-else>You don't have any tasks yet — add one! 🌱</p>
  </div>
</template>

<style scoped>
.task-container {
  display: flex;
  gap: 20px;
  align-items: center;
}

.task-image img {
  width: 32px;
  height: 32px;
  object-fit: contain;
}
</style>

<script setup lang="ts">
import { useTasksStore } from '@/stores/tasks'
import type { Task } from '@/types'

const tasks = useTasksStore()

tasks.$subscribe((_mutation, state) => {
  localStorage.setItem('tasks', JSON.stringify(state.tasks))
})

const getTaskImage = (task: Task) => {
  if (task.status === 'Just started!') return '/sprouts/sprout1.png'
  if (task.status === 'In progress!') return '/stems/stem1.png'
  return task.selectedFlower
}

const handleStatusChange = (id: string, e: Event) => {
  const target = e.target as HTMLSelectElement
  const newStatus = target.value as Task['status']
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
        <select v-model="task.status" @change="(e) => handleStatusChange(task.id, e)">
          <option value="Just started!">Just started!</option>
          <option value="In progress!">In progress!</option>
          <option value="Completed!">Completed!</option>
        </select>
        <button @click="tasks.deleteTask(task.id)">Delete</button>
      </li>
    </ul>

    <p v-else>You don't have any tasks yet — add one! 🌱</p>
  </div>
</template>

<style scoped>
.task-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.task-container {
  display: flex;
  gap: 20px;
  width: 200px;
}

.task-image img {
  width: 32px;
  height: 32px;
  object-fit: contain;
}
</style>

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
        <span
          class="task-title"
          :style="{ textDecoration: task.status === 'Completed!' ? 'line-through' : 'none' }"
          >{{ task.title }}</span
        >
        <div class="task-info">
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
        </div>
      </li>
    </ul>

    <div class="task-list" v-else>
      <p class="no-tasks-message">You don't have any tasks yet — add one! 🌱</p>
    </div>
  </div>
</template>

<style scoped>
.task-list {
  margin: 0 auto;
  background-color: var(--pixel-bg-container);
  border: 3px solid var(--pixel-border);
  box-shadow: var(--pixel-box-shadow);
  width: 600px;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 20px 35px;
  overflow-y: scroll;
  scroll-behavior: smooth;
}

.task-title {
  font-family: var(--pixel-font);
  font-size: 12px;
  color: #000;
}

.task-container {
  width: 100%;
  padding: 10px;
  background-color: white;
  border: 3px solid var(--pixel-border);
  box-shadow: var(--pixel-box-shadow);
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
}

.task-info {
  display: flex;
  gap: 20px;
  align-items: center;
}

.task-image img {
  width: 32px;
  height: 32px;
  object-fit: contain;
}

.task-container:nth-last-child(1) {
  margin-bottom: 70px;
}

.no-tasks-message {
  font-family: var(--pixel-font);
  font-size: 14px;
  color: #000;
}
</style>

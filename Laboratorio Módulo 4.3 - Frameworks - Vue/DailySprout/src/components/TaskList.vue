<script setup lang="ts">
import { useTasksStore } from '@/stores/tasks'

const tasks = useTasksStore()

tasks.$subscribe((_mutation, state) => {
  localStorage.setItem('tasks', JSON.stringify(state.tasks))
})
</script>

<template>
  <ul v-if="tasks.tasks.length > 0">
    <li v-for="(task, index) in tasks.tasks" :key="task.id">
      <input type="checkbox" v-model="task.completed" />
      <span :style="{ textDecoration: task.completed ? 'line-through' : 'none' }">{{
        task.title
      }}</span>
      <button @click="tasks.deleteTask(task.id)">Delete</button>
    </li>
  </ul>

  <p v-else>You don't have any tasks yet — add one! 🌱</p>
</template>

<style scoped></style>

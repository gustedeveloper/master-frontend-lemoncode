<script setup lang="ts">
import { useTasksStore } from '@/stores/tasks'

const tasks = useTasksStore()
</script>

<template>
  <ul>
    <li v-for="(task, index) in tasks.tasks" :key="task.id">
      <input type="checkbox" v-model="task.completed" />
      <span :style="{ textDecoration: task.completed ? 'line-through' : 'none' }">{{
        task.title
      }}</span>
      <button @click="tasks.deleteTask(task.id)">Delete</button>
    </li>
  </ul>
</template>

<style scoped></style>

<script setup lang="ts">
import { useTasksStore } from '@/stores/tasks'
import { ref } from 'vue'

const newTaskTitle = ref('')

const addTask = () => {
  if (newTaskTitle.value.trim()) {
    tasks.addTask(newTaskTitle.value)
    newTaskTitle.value = ''
  }
}

const tasks = useTasksStore()
</script>

<template>
  <form @submit.prevent="addTask">
    <input v-model="newTaskTitle" placeholder="Write your task" />
    <button>Add task</button>
  </form>

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

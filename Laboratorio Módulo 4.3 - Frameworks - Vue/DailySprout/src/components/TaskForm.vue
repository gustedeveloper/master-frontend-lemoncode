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
</template>

<style scoped></style>

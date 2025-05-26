<script setup lang="ts">
import { reactive } from 'vue'

interface Task {
  title: string
  completed: boolean
}

const state = reactive<{
  tasks: Task[]
  newTask: Task
}>({
  tasks: [
    { title: 'Aprender Vue', completed: false },
    { title: 'Publicar en Linkedin', completed: true },
  ],
  newTask: {
    title: '',
    completed: false,
  },
})

const addTask = () => {
  if (state.newTask.title.trim()) {
    state.tasks = [...state.tasks, { ...state.newTask }]
    state.newTask.title = ''
    state.newTask.completed = false
  }
}
</script>

<template>
  <form @submit.prevent="addTask">
    <input v-model="state.newTask.title" placeholder="Write your task" />
    <button>Add task</button>
  </form>

  <ul>
    <li v-for="(task, index) in state.tasks" :key="index">
      <input type="checkbox" v-model="task.completed" />
      <span :style="{ textDecoration: task.completed ? 'line-through' : 'none' }">{{
        task.title
      }}</span>
    </li>
  </ul>
</template>

<style scoped></style>

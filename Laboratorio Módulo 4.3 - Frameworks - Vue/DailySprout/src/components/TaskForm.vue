<script setup lang="ts">
import { useTasksStore } from '@/stores/tasks'
import FlowerSelect from '@/common/FlowerSelect.vue'
import { reactive } from 'vue'
import { flowers } from '@/utils/flower.util'
import type { Task } from '@/types'

const defaultFlower = flowers[0] || ''

let newTask = reactive<Pick<Task, 'title' | 'status' | 'selectedFlower'>>({
  title: '',
  status: 'Just started!',
  selectedFlower: defaultFlower,
})

const addTask = () => {
  if (newTask.title.trim()) {
    tasks.addTask({ ...newTask })
    newTask.title = ''
    newTask.status = 'Just started!'
    newTask.selectedFlower = defaultFlower
  }
}

const tasks = useTasksStore()
</script>

<template>
  <form class="form-container" @submit.prevent="addTask">
    <label for="task-title"></label>
    <input
      class="title-input"
      id="task-title"
      v-model="newTask.title"
      placeholder="Write your task"
    />
    <div class="task-selection-options">
      <div class="status-selection">
        <label for="status-select">Choose task status: </label>
        <select id="status-select" v-model="newTask.status">
          <option value="Just started!">Just started!</option>
          <option value="In progress!">In progress!</option>
          <option value="Completed!">Completed!</option>
        </select>
      </div>
      <div class="flower-selector">
        <label>Select a flower:</label>
        <FlowerSelect v-model="newTask.selectedFlower" />
      </div>
    </div>
    <button>Add task</button>
  </form>
</template>

<style scoped>
.form-container {
  margin: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  .title-input {
    width: 400px;
  }

  .task-selection-options {
    display: flex;
    gap: 20px;
  }

  #status-select {
    width: 100px;
  }

  .flower-selector {
    display: flex;
    gap: 5px;
  }

  button {
    width: 100px;
  }
}
</style>

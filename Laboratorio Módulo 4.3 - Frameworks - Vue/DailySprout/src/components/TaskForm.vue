<script setup lang="ts">
import { useTasksStore } from '@/stores/tasks'
import FlowerSelect from '@/common/FlowerSelect.vue'
import { reactive } from 'vue'
import { flowers } from '@/utils/flower.util'
import type { Task } from '@/types'
import CustomStatusDropdown from '@/common/CustomStatusDropdown.vue'

const defaultFlower = flowers[0] || ''

let newTask = reactive<Pick<Task, 'title' | 'status' | 'selectedFlower'>>({
  title: '',
  status: '',
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
    <div class="form-header">
      <label for="task-title"></label>
      <input
        class="title-input"
        id="task-title"
        v-model="newTask.title"
        placeholder="Write your task"
      />
    </div>
    <div class="task-selection-options">
      <CustomStatusDropdown
        v-model="newTask.status"
        :options="['Just started!', 'In progress!', 'Completed!']"
      />
      <div class="flower-selector">
        <FlowerSelect v-model="newTask.selectedFlower" />
      </div>
    </div>
    <button class="pixel-button add">Add task</button>
  </form>
</template>

<style scoped>
.form-container {
  background-color: var(--pixel-bg-container);
  border: 3px solid var(--pixel-border);
  box-shadow: var(--pixel-box-shadow);
  width: 600px;
  height: 250px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.title-input {
  width: 500px;
  font-family: var(--pixel-font);
  font-size: 12px;
  padding: 8px;
  border: 3px solid var(--pixel-border);
  background-color: var(--pixel-bg);
  box-shadow: var(--pixel-box-shadow);
  cursor: pointer;
  gap: 8px;
}

.title-input:focus {
  outline: 1px solid var(--pixel-highlight);
}

.task-selection-options {
  display: flex;
  gap: 50px;
  align-items: center;
}
</style>

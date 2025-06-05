<script setup lang="ts">
import TaskForm from '@/components/TaskForm.vue'
import TaskList from '@/components/TaskList.vue'
</script>

<template>
  <div class="main-container">
    <TaskForm />
    <TaskList />
  </div>
</template>

<style scoped>
.main-container {
  display: flex;
  justify-content: center;
  gap: 50px;
}

@media (max-width: 1350px) {
  .main-container {
    flex-direction: column;
    align-items: center;
  }
}
</style>

<script setup lang="ts">
import { useTasksStore } from '@/stores/tasks'
import { computed } from 'vue'
import TaskImage from '@/common/TaskImage.vue'
const tasks = useTasksStore()

const tasksInGarden = computed(() => {
  return tasks.tasks.filter((task) => task.showInGarden)
})
</script>
<template>
  <div class="garden-container">
    <div class="garden-row">
      <div class="garden-row-item" v-for="task in tasksInGarden" :key="task.id">
        <TaskImage :task="task" :isInGarden="true" />
      </div>
    </div>
  </div>
</template>
<style scoped>
.garden-container {
  margin: 0 auto;
  background-image: url('/backgrounds/day.png');
  background-size: cover;
  background-position: center bottom;
  border: 3px solid var(--pixel-border);
  box-shadow: var(--pixel-box-shadow);
  width: 800px;
  height: 500px;
  display: flex;
  align-items: flex-end;
  padding: 20px;
}

.garden-row {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
  width: 100%;
  padding-bottom: 20px;
}

.garden-row-item {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 100px;
  z-index: 100;
}

.garden-row-item:nth-child(odd) {
  margin-top: 0px;
}

.garden-row-item:nth-child(even) {
  margin-top: -20px;
}
</style>

<script setup lang="ts">
import { useTasksStore } from '@/stores/tasks'
import { computed, ref } from 'vue'
import TaskImage from '@/common/TaskImage.vue'
import CustomImageSelector from '@/common/CustomImageSelector.vue'

const backgroundOptions = [
  '/backgrounds/sunrise.png',
  '/backgrounds/day.png',
  '/backgrounds/sunset.png',
  '/backgrounds/forest.png',
  '/backgrounds/night.png',
  '/backgrounds/mountains-night.png',
]

const selectedBackground = ref(backgroundOptions[0])

const tasks = useTasksStore()

const tasksInGarden = computed(() => {
  return tasks.tasks.filter((task) => task.showInGarden)
})
</script>
<template>
  <div class="garden-wrapper">
    <div class="background-selector">
      <CustomImageSelector
        v-model="selectedBackground"
        :options="backgroundOptions"
        label="Choose background:"
      />
    </div>

    <div class="garden-container" :style="{ 'background-image': `url(${selectedBackground})` }">
      <div class="garden-row">
        <div class="garden-row-item" v-for="task in tasksInGarden" :key="task.id">
          <TaskImage :task="task" :isInGarden="true" />
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.garden-wrapper {
  width: 1000px;
  position: relative;
  margin: 0 auto;
}

.background-selector {
  position: absolute;
  right: -50px;
  z-index: 200;
}
.garden-container {
  margin: 0 auto;
  background-size: cover;
  background-position: center bottom;
  border: 3px solid var(--pixel-border);
  box-shadow: var(--pixel-box-shadow);
  width: 800px;
  height: 500px;
  display: flex;
  align-items: flex-end;
  padding: 20px;
  position: relative;
  transition: background-image 0.4s ease-in-out;
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

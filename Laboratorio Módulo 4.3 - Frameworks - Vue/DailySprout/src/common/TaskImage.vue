<script setup lang="ts">
import { useRoute } from 'vue-router'
import type { Task } from '@/types'

const props = defineProps<{ task: Task; isInGarden?: boolean }>()

const route = useRoute()

const getImage = () => {
  if (props.task.status === 'Just started!') return '/sprouts/sprout1.png'
  if (props.task.status === 'In progress!') return '/stems/stem1.png'
  return props.task.selectedFlower
}
</script>

<template>
  <div class="tooltip-wrapper">
    <transition name="fade-grow" mode="out-in">
      <img
        :src="getImage()"
        :key="task.status"
        class="task-image"
        alt="task stage"
        :class="[
          'task-image',
          isInGarden ? 'in-garden' : '',
          (isInGarden && task.status === 'Completed!') ||
          (isInGarden && task.status === 'In progress!')
            ? 'large-flower'
            : '',
        ]"
      />
    </transition>
    <span v-if="route.name === 'garden'" class="tooltip-text">{{ task.title }}</span>
  </div>
</template>

<style scoped>
.task-image {
  width: 32px;
  height: 32px;
  object-fit: contain;
  transition:
    transform 0.6s ease,
    opacity 0.6s ease;
}

.large-flower {
  width: 50px;
  height: 50px;
}

.fade-grow-enter-active,
.fade-grow-leave-active {
  transition: all 0.6s ease;
}

.fade-grow-enter-from,
.fade-grow-leave-to {
  opacity: 0;
  transform: scale(0.7);
}

.fade-grow-enter-to,
.fade-grow-leave-from {
  opacity: 1;
  transform: scale(1);
}

.tooltip-wrapper {
  position: relative;
  display: inline-block;
}

.tooltip-text {
  visibility: hidden;
  background-color: var(--pixel-bg);
  font-family: var(--pixel-font);
  border: 2px solid var(--pixel-border);
  padding: 6px;
  position: absolute;
  bottom: 130%;
  left: 50%;
  transform: translateX(-50%);
  white-space: nowrap;
  box-shadow: var(--pixel-box-shadow);
  z-index: 999;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.tooltip-wrapper:hover .tooltip-text {
  visibility: visible;
  opacity: 1;
}

@media (max-width: 1176px) {
  .in-garden.task-image {
    width: 24px;
    height: 24px;
  }

  .in-garden.large-flower {
    width: 35px;
    height: 35px;
  }
}

@media (max-width: 932px) {
  .in-garden.task-image {
    width: 20px;
    height: 20px;
  }

  .in-garden.large-flower {
    width: 30px;
    height: 30px;
  }
}

@media (max-width: 600px) {
  .in-garden.task-image {
    width: 12px;
    height: 12px;
  }

  .in-garden.large-flower {
    width: 20px;
    height: 20px;
  }
}
</style>

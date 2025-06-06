<script setup lang="ts">
import type { Task } from '@/types'

const props = defineProps<{ task: Task; isInGarden?: boolean }>()

const getImage = () => {
  if (props.task.status === 'Just started!') return '/sprouts/sprout1.png'
  if (props.task.status === 'In progress!') return '/stems/stem1.png'
  return props.task.selectedFlower
}
</script>

<template>
  <transition name="fade-grow" mode="out-in">
    <img
      :src="getImage()"
      :key="task.status"
      class="task-image"
      alt="task stage"
      :class="['task-image', isInGarden && task.status === 'Completed!' ? 'large-flower' : '']"
    />
  </transition>
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
  width: 60px;
  height: 60px;
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
</style>

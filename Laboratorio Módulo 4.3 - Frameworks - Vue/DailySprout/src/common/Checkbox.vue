<script setup lang="ts">
import { computed } from 'vue'

const maxTasksInGarden = 10

const props = defineProps<{
  modelValue: boolean
  gardenCount: number
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
}>()

const checked = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value),
})

const isDisabled = computed(() => {
  return !props.modelValue && props.gardenCount >= maxTasksInGarden
})
</script>

<template>
  <label class="pixel-checkbox-wrapper">
    <input type="checkbox" v-model="checked" :disabled="isDisabled" />
    <span class="custom-checkbox">
      <svg
        v-if="checked"
        class="checkmark-only"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 52 52"
      >
        <path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
      </svg>
    </span>
    Show in garden
  </label>
</template>

<style scoped>
.pixel-checkbox-wrapper {
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: var(--pixel-font);
  font-size: 12px;
  cursor: pointer;
  user-select: none;
}

.pixel-checkbox-wrapper input[type='checkbox'] {
  display: none;
}

.custom-checkbox {
  width: 20px;
  height: 20px;
  background-color: var(--pixel-bg-container);
  border: 3px solid var(--pixel-border);
  box-shadow: var(--pixel-box-shadow);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.checkmark-only {
  width: 50px;
  height: 50px;
  stroke: var(--pixel-border);
  stroke-width: 5;
  stroke-linecap: square;
  stroke-dasharray: 60;
  stroke-dashoffset: 60;
  animation: stroke-draw 0.3s steps(6) forwards;
}

.pixel-checkbox-wrapper input[type='checkbox']:disabled + .custom-checkbox {
  opacity: 0.5;
  cursor: not-allowed;
}

@keyframes stroke-draw {
  to {
    stroke-dashoffset: 0;
  }
}
</style>

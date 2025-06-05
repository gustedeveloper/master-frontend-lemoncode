<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import { flowers } from '@/utils/flower.util'

const props = defineProps<{ modelValue: string }>()
const emit = defineEmits(['update:modelValue'])

const isOpen = ref(false)
const selectedFlower = ref('')

watchEffect(() => {
  const isValid = flowers.includes(props.modelValue)
  selectedFlower.value = isValid ? props.modelValue : flowers.length > 0 ? flowers[0] : ''

  if (props.modelValue !== selectedFlower.value) {
    emit('update:modelValue', selectedFlower.value)
  }
})

const selectFlower = (flower: string) => {
  selectedFlower.value = flower
  emit('update:modelValue', flower)
  isOpen.value = false
}
</script>

<template>
  <div
    class="custom-dropdown"
    role="combobox"
    aria-haspopup="listbox"
    :aria-expanded="isOpen"
    aria-controls="flower-options"
  >
    <label for="flower-select">Select a flower:</label>
    <div
      class="dropdown-toggle"
      tabindex="0"
      @click="isOpen = !isOpen"
      @keydown.enter="isOpen = !isOpen"
    >
      <img :src="selectedFlower" alt="Selected Flower" />
      <span class="arrow">▼</span>
    </div>

    <div id="flower-options" class="dropdown-options" v-if="isOpen" role="listbox">
      <div
        v-for="(flower, index) in flowers"
        :key="index"
        class="dropdown-option"
        role="option"
        tabindex="0"
        @click="selectFlower(flower)"
        @keydown.enter="selectFlower(flower)"
      >
        <img :src="flower" alt="Flower Option" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.flower-selector label {
  font-family: var(--pixel-font);
  font-size: 12px;
}

.custom-dropdown {
  position: relative;
  width: 100px;
  user-select: none;
  font-family: var(--pixel-font);
  font-size: 0;
}

.dropdown-toggle {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  border: 3px solid var(--pixel-border);
  background-color: var(--pixel-bg);
  box-shadow: var(--pixel-box-shadow);
  cursor: pointer;
  gap: 8px;
}

.dropdown-toggle img {
  width: 32px;
  height: 32px;
  object-fit: contain;
  image-rendering: pixelated;
}

.dropdown-options {
  position: absolute;
  top: 100%;
  left: 0;
  background-color: var(--pixel-bg);
  border: 3px solid var(--pixel-border);
  box-shadow: var(--pixel-box-shadow);
  z-index: 1000;
  margin-top: 4px;
  max-height: 160px;
  overflow-y: auto;
  padding: 4px;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.dropdown-option {
  padding: 6px;
  border: 2px solid transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--pixel-bg);
  transition: all 0.1s ease;
}

.dropdown-option:hover {
  background-color: var(--pixel-highlight);
  box-shadow: var(--pixel-box-shadow);
  transform: scale(1.05);
}

.dropdown-option img {
  width: 40px;
  height: 40px;
  object-fit: contain;
  image-rendering: pixelated;
}

.arrow {
  font-size: 12px;
  margin-right: 10px;
}

::-webkit-scrollbar-thumb {
  border: 2px solid var(--pixel-bg);
}
</style>

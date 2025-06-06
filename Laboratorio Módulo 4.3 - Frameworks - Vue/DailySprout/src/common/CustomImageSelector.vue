<script setup lang="ts">
import { ref, watchEffect } from 'vue'

const props = defineProps<{ modelValue: string; options: string[]; label?: string }>()
const emit = defineEmits(['update:modelValue'])

const isOpen = ref(false)
const selected = ref('')

watchEffect(() => {
  const isValid = props.options.includes(props.modelValue)
  selected.value = isValid ? props.modelValue : props.options.length > 0 ? props.options[0] : ''

  if (props.modelValue !== selected.value) {
    emit('update:modelValue', selected.value)
  }
})

const selectOption = (option: string) => {
  selected.value = option
  emit('update:modelValue', option)
  isOpen.value = false
}
</script>

<template>
  <div
    class="custom-dropdown"
    role="combobox"
    aria-haspopup="listbox"
    :aria-expanded="isOpen"
    aria-controls="image-options"
  >
    <label v-if="label" for="image-select">{{ label }}</label>
    <div
      class="dropdown-toggle"
      tabindex="0"
      @click="isOpen = !isOpen"
      @keydown.enter="isOpen = !isOpen"
    >
      <img :src="selected" alt="Selected option preview" />
      <span class="arrow">▼</span>
    </div>

    <div id="image-options" class="dropdown-options" v-if="isOpen" role="listbox">
      <div
        v-for="(img, index) in options"
        :key="index"
        class="dropdown-option"
        role="option"
        tabindex="0"
        @click="selectOption(img)"
        @keydown.enter="selectOption(img)"
      >
        <img :src="img" alt="Option preview" />
      </div>
    </div>
  </div>
</template>

<style scoped>
label {
  font-family: var(--pixel-font);
  font-size: 12px;
}

.custom-dropdown {
  position: relative;
  width: 120px;
  user-select: none;
  font-family: var(--pixel-font);
  font-size: 0;
}

.dropdown-toggle {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  margin-top: 8px;
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

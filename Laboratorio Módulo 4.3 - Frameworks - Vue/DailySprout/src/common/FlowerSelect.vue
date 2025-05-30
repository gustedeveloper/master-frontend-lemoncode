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
    <div
      class="dropdown-toggle"
      tabindex="0"
      @click="isOpen = !isOpen"
      @keydown.enter="isOpen = !isOpen"
    >
      <img :src="selectedFlower" alt="Selected Flower" />
      <span>▼</span>
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
.custom-dropdown {
  position: relative;
  width: 80px;
  user-select: none;
  font-size: 0;
}

.dropdown-toggle {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #ccc;
  padding: 4px;
  border-radius: 8px;
  background: #fff;
  cursor: pointer;
  gap: 4px;
}

.dropdown-toggle img {
  width: 32px;
  height: 32px;
  object-fit: contain;
}

.dropdown-options {
  position: absolute;
  top: 100%;
  left: 0;
  background: #fff;
  border: 2px solid #ccc;
  border-radius: 8px;
  margin-top: 4px;
  z-index: 1000;
  max-height: 160px;
  overflow-y: auto;
  padding: 4px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.dropdown-option {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2px;
  cursor: pointer;
  transition: transform 0.2s;
}

.dropdown-option:hover {
  transform: scale(1.1);
}

.dropdown-option img {
  width: 40px;
  height: 40px;
  object-fit: contain;
}
</style>

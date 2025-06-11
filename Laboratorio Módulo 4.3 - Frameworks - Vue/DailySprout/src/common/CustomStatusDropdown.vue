<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'

const props = defineProps<{
  modelValue: string
  options: string[]
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const isOpen = ref(false)
const selected = ref(props.modelValue)

const toggleDropdown = () => {
  isOpen.value = !isOpen.value
}

const selectOption = (option: string) => {
  selected.value = option
  emit('update:modelValue', option)
  isOpen.value = false
}

onMounted(() => {
  selected.value = props.modelValue
})

watch(
  () => props.modelValue,
  (newVal) => {
    selected.value = newVal
  },
)
</script>

<template>
  <div class="pixel-dropdown" tabindex="0" @blur="() => (isOpen = false)">
    <div class="pixel-dropdown-toggle" @click="toggleDropdown">
      <span :class="{ placeholder: !selected }">{{ selected || 'Select status' }}</span>
      <span class="arrow">▼</span>
    </div>
    <ul v-if="isOpen" class="pixel-dropdown-menu">
      <li
        v-for="option in options"
        :key="option"
        class="pixel-dropdown-item"
        @click="selectOption(option)"
      >
        {{ option }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
.status-selection {
  font-family: var(--pixel-font);
  font-size: 12px;
  color: #000;
  margin-bottom: 1rem;
}

.pixel-dropdown {
  position: relative;
  width: 135px;
  border: 3px solid var(--pixel-border);
  background-color: var(--pixel-bg);
  box-shadow: 4px 4px 0 var(--pixel-shadow);
  cursor: pointer;
  padding: 8px 12px;
  user-select: none;
}

.pixel-dropdown-toggle {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: var(--pixel-font);
  font-size: 12px;
}

.arrow {
  margin-left: 10px;
}

.pixel-dropdown-menu {
  list-style: none;
  padding: 0;
  margin: 4px 0 0 0;
  position: absolute;
  width: 100%;
  background-color: var(--pixel-bg);
  border: 3px solid var(--pixel-border);
  box-shadow: 4px 4px 0 var(--pixel-shadow);
  z-index: 10;
}

.pixel-dropdown-item {
  padding: 8px 12px;
  border-top: 1px solid var(--pixel-border);
  font-family: var(--pixel-font);
  font-size: 12px;
}

.pixel-dropdown-item:first-child {
  border-top: none;
}

.pixel-dropdown-item:hover {
  background-color: var(--pixel-highlight);
  cursor: pointer;
}
</style>

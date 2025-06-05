<script setup lang="ts">
import { ref, watch } from 'vue'
import type { Task } from '@/types'

const props = defineProps<{
  task: Task
  isEditing: boolean
}>()

const emit = defineEmits<{
  (e: 'start-editing', id: string): void
  (e: 'stop-editing'): void
  (e: 'update-title', id: string, newTitle: string): void
}>()

const localTitle = ref(props.task.title)

watch(
  () => props.isEditing,
  (newVal) => {
    if (newVal) {
      localTitle.value = props.task.title
    }
  },
)

const save = () => {
  const trimmed = localTitle.value.trim()
  if (trimmed !== '') {
    emit('update-title', props.task.id, trimmed.length > 100 ? trimmed.slice(0, 100) : trimmed)
  }
  emit('stop-editing')
}
</script>

<template>
  <div class="task-title-container">
    <span
      v-if="!isEditing"
      class="task-title"
      :style="{ textDecoration: task.status === 'Completed!' ? 'line-through' : 'none' }"
      @dblclick="emit('start-editing', task.id)"
    >
      {{ task.title }}
    </span>

    <div v-else class="task-title-input-container">
      <textarea
        class="task-title-input"
        v-model="localTitle"
        @keyup.enter="save"
        @blur="emit('stop-editing')"
        autofocus
        maxlength="100"
        rows="2"
      />
      <p class="task-title-length" :class="{ warning: localTitle.trim() === '' }">
        {{ localTitle.length }} / 100 characters
        <span v-if="localTitle.trim() === ''"> — Title cannot be empty</span>
      </p>
    </div>
  </div>
</template>

<style scoped>
.task-title {
  height: 40px;
  font-family: var(--pixel-font);
  font-size: 12px;
  color: #000;
  word-break: break-word;
  width: 100%;
  line-height: 1.4;
}

.task-title-container {
  width: 100%;
}

.task-title-input {
  width: 100%;
  font-family: var(--pixel-font);
  font-size: 12px;
  padding: 10px;
  border: 3px solid var(--pixel-border);
  background-color: var(--pixel-bg);
  box-shadow: var(--pixel-box-shadow);
  resize: none;
  line-height: 1.4;
  word-break: break-word;
}

.task-title-input:focus {
  outline: 1px solid var(--pixel-highlight);
}

.task-title-length {
  font-size: 12px;
  margin-bottom: 0;
}

.task-title-length.warning {
  color: red;
}
</style>

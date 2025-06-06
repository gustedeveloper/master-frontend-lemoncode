<script setup lang="ts">
import { useTasksStore } from '@/stores/tasks'
import type { Task } from '@/types'
import CustomStatusDropdown from '@/common/CustomStatusDropdown.vue'
import TaskImage from '@/common/TaskImage.vue'
import EditableTitle from '@/common/EditableTitle.vue'
import Checkbox from '@/common/Checkbox.vue'
import { ref } from 'vue'
const tasks = useTasksStore()

tasks.$subscribe((_mutation, state) => {
  localStorage.setItem('tasks', JSON.stringify(state.tasks))
})

const editingTaskId = ref<string | null>(null)

const handleStatusChange = (id: string, newStatus: Task['status']) => {
  tasks.updateTask({ id, status: newStatus })
}

const startEditing = (taskId: string) => {
  editingTaskId.value = taskId
}

const stopEditing = () => {
  editingTaskId.value = null
}

const updateTaskTitle = (taskId: string, newTitle: string) => {
  tasks.updateTask({ id: taskId, title: newTitle })
}
</script>

<template>
  <div>
    <ul class="task-list" v-if="tasks.tasks.length > 0">
      <li class="task-container" v-for="task in tasks.tasks" :key="task.id">
        <EditableTitle
          :task="task"
          :isEditing="editingTaskId === task.id"
          @start-editing="startEditing"
          @stop-editing="stopEditing"
          @update-title="updateTaskTitle"
        />
        <div class="task-info">
          <TaskImage :task="task" />
          <CustomStatusDropdown
            v-model="task.status"
            :options="['Just started!', 'In progress!', 'Completed!']"
            @update:modelValue="
              (newStatus: string) => handleStatusChange(task.id, newStatus as Task['status'])
            "
          />
          <Checkbox v-model="task.showInGarden" />
          <button class="pixel-button delete" @click="tasks.deleteTask(task.id)">Delete</button>
        </div>
      </li>
    </ul>

    <div class="task-list" v-else>
      <p class="no-tasks-message">You don't have any tasks yet — add one! 🌱</p>
    </div>
  </div>
</template>

<style scoped>
.task-list {
  margin: 0 auto;
  background-color: var(--pixel-bg-container);
  border: 3px solid var(--pixel-border);
  box-shadow: var(--pixel-box-shadow);
  width: 600px;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
  padding: 25px 35px;
  overflow-y: scroll;
  scroll-behavior: smooth;
}

.task-container {
  width: 100%;
  padding: 20px;
  background-color: white;
  border: 3px solid var(--pixel-border);
  box-shadow: var(--pixel-box-shadow);
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
}

.task-info {
  display: flex;
  gap: 20px;
  align-items: center;
}

.task-image img {
  width: 32px;
  height: 32px;
  object-fit: contain;
}

.task-container:nth-last-child(1) {
  margin-bottom: 70px;
}

.no-tasks-message {
  font-family: var(--pixel-font);
  font-size: 14px;
  color: #000;
}

@media (max-width: 768px) {
  .task-list {
    width: 500px;
  }
}

@media (max-width: 500px) {
  .task-list {
    width: 300px;
    margin-bottom: 50px;
  }

  .task-info {
    flex-direction: column;
    align-items: center;
  }
}
</style>

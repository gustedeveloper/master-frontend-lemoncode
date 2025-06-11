<script setup lang="ts">
import { useTasksStore } from '@/stores/tasks'
import type { Task } from '@/types'
import CustomStatusDropdown from '@/common/CustomStatusDropdown.vue'
import TaskImage from '@/common/TaskImage.vue'
import EditableTitle from '@/common/EditableTitle.vue'
import Checkbox from '@/common/Checkbox.vue'
import { computed, ref } from 'vue'
import TaskFilterControl from '@/common/TaskFilterControl.vue'
import ArchivedTasksContainer from '@/common/ArchivedTasksContainer.vue'
const tasks = useTasksStore()

const activeFilter = ref('All')
const showArchived = ref(false)

const nonArchivedTasks = computed(() => tasks.tasks.filter((task) => !task.archived))

const filteredTasks = computed(() => {
  if (activeFilter.value === 'All') return nonArchivedTasks.value
  if (activeFilter.value === 'In garden')
    return nonArchivedTasks.value.filter((task) => task.showInGarden)
  return nonArchivedTasks.value.filter((task) => task.status === activeFilter.value)
})

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

const archiveTask = (taskId: string) => {
  tasks.updateTask({ id: taskId, showInGarden: false, archived: true })
}
</script>

<template>
  <div class="main-container">
    <div class="archive-button-container">
      <button class="archive-button" @click="showArchived = !showArchived">
        <img class="button-img" :src="showArchived ? '/icons/list.png' : '/icons/archive.png'" />
      </button>
    </div>
    <ArchivedTasksContainer v-if="showArchived" />
    <ul class="task-list" v-else-if="nonArchivedTasks.length > 0">
      <TaskFilterControl v-model="activeFilter" />
      <div>
        Tasks in garden: {{ nonArchivedTasks.filter((task) => task.showInGarden).length }} / 10
      </div>
      <li class="task-container" v-for="task in filteredTasks" :key="task.id">
        <EditableTitle
          :task="task"
          :isEditing="editingTaskId === task.id"
          @start-editing="startEditing"
          @stop-editing="stopEditing"
          @update-title="updateTaskTitle"
        />
        <div class="task-info">
          <TaskImage :task="task" :isInGarden="false" />
          <CustomStatusDropdown
            v-model="task.status"
            :options="['Just started!', 'In progress!', 'Completed!']"
            @update:modelValue="
              (newStatus: string) => handleStatusChange(task.id, newStatus as Task['status'])
            "
          />
          <Checkbox
            v-model="task.showInGarden"
            :gardenCount="nonArchivedTasks.filter((task) => task.showInGarden).length"
          />
          <div class="task-actions">
            <button class="pixel-button archive" @click="archiveTask(task.id)">
              <img class="button-img" :src="'/icons/archive.png'" />
            </button>
            <button class="pixel-button delete" @click="tasks.deleteTask(task.id)"><img class="button-img" :src="'/icons/delete.png'" </button>
          </div>
        </div>
      </li>
    </ul>

    <div class="task-list" v-else>
      <p class="no-tasks-message">You don't have any tasks yet — add one! 🌱</p>
    </div>
  </div>
</template>

<style scoped>
.main-container {
  position: relative;
}

.archive-button-container {
  border-top: 3px solid var(--pixel-border);
  border-right: 3px solid var(--pixel-border);
  border-left: 3px solid var(--pixel-border);
  background-color: var(--pixel-bg-container);
  padding-top: 5px;
  height: 43px;
  position: absolute;
  top: -40px;
  right: 20px;
  cursor: pointer;
}

.archive-button {
  cursor: pointer;
  border: none;
  background-color: transparent;
  transition: transform 0.3s ease;
}

.archive-button:hover {
  transform: scale(1.1);
}

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

.task-actions {
  display: flex;
  gap: 10px;
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

@media (max-width: 1350px) {
  .main-container {
    margin-top: 30px;
  }
  .task-list {
    margin-bottom: 55px;
  }
}

@media (max-width: 768px) {
  
  .task-list {
    width: 500px;
  }
  .task-info {
    flex-direction: column;
    align-items: center;
  }
}

@media (max-width: 600px) {
  .task-list {
    width: 350px;
    margin-bottom: 50px;
  }
}
</style>

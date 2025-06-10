<script setup lang="ts">
import { useTasksStore } from '@/stores/tasks'
import TaskImage from '@/common/TaskImage.vue'
import { computed } from 'vue'

const tasks = useTasksStore()

const archivedTasks = computed(() => {
  return tasks.tasks.filter((task) => task.archived)
})

const restoreTask = (taskId: string) => {
  tasks.updateTask({ id: taskId, archived: false })
}
</script>

<template>
  <div>
    <ul class="task-list" v-if="archivedTasks.length > 0">
      <li class="task-container" v-for="task in archivedTasks" :key="task.id">
        <span class="task-title">
          {{ task.title }}
        </span>
        <div class="task-info">
          <TaskImage :task="task" :isInGarden="false" />
          <div class="task-actions">
            <button class="pixel-button restore" @click="restoreTask(task.id)">
              <img :src="'/icons/list-green.png'" />
            </button>
            <button class="pixel-button delete" @click="tasks.deleteTask(task.id)">Delete</button>
          </div>
        </div>
      </li>
    </ul>

    <div class="task-list" v-else>
      <p class="no-tasks-message">You don't have any archived tasks 🌱</p>
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

.task-title {
  height: 40px;
  font-family: var(--pixel-font);
  font-size: 12px;
  color: #000;
  word-break: break-word;
  width: 100%;
  line-height: 1.4;
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

.restore {
  padding: 4px;
}

.pixel-button.restore img {
  width: 24px;
}

@media (max-width: 1350px) {
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

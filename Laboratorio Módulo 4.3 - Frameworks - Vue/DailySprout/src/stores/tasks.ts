import { defineStore } from 'pinia'
import type { Task } from '@/types'
import { nanoid } from 'nanoid'

export const useTasksStore = defineStore('tasks', {
  state: () => ({
    tasks: JSON.parse(localStorage.getItem('tasks') || '[]') as Task[],
  }),

  actions: {
    addTask(newTask: Partial<Task> & { title: string }) {
      if (newTask.title.trim()) {
        const addedTask: Task = {
          id: nanoid(),
          title: newTask.title,
          status: 'Just started!' as Task['status'],
          showInGarden: false,
          archived: false,
          selectedFlower: newTask.selectedFlower || '',
        }
        this.tasks = [...this.tasks, { ...addedTask }]
        localStorage.setItem('tasks', JSON.stringify(this.tasks))
      }
    },
    deleteTask(id: string) {
      this.tasks = this.tasks.filter((task) => task.id !== id)
      localStorage.setItem('tasks', JSON.stringify(this.tasks))
    },
    updateTask(updatedTask: Partial<Task> & { id: string }) {
      const index = this.tasks.findIndex((task) => task.id === updatedTask.id)
      if (index !== -1) {
        this.tasks[index] = { ...this.tasks[index], ...updatedTask }
        localStorage.setItem('tasks', JSON.stringify(this.tasks))
      }
    },
  },
})

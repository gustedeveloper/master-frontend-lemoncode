import { defineStore } from 'pinia'
import type { Task } from '@/types'
import { nanoid } from 'nanoid'

export const useTasksStore = defineStore('tasks', {
  state: () => ({
    tasks: JSON.parse(localStorage.getItem('tasks') || '[]') as Task[],
  }),

  actions: {
    addTask(title: string) {
      if (title.trim()) {
        const addedTask: Task = {
          id: nanoid(),
          title: title,
          completed: false,
        }
        this.tasks = [...this.tasks, { ...addedTask }]
        localStorage.setItem('tasks', JSON.stringify(this.tasks))
      }
    },
    deleteTask(id: string) {
      this.tasks = this.tasks.filter((task) => task.id !== id)
      localStorage.setItem('tasks', JSON.stringify(this.tasks))
    },
  },
})

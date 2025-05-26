import { defineStore } from 'pinia'
import type { Task } from '@/types'
import { nanoid } from 'nanoid'

export const useTasksStore = defineStore('tasks', {
  state: () => ({
    tasks: [
      { id: nanoid(), title: 'Aprender Vue', completed: false },
      { id: nanoid(), title: 'Publicar en Linkedin', completed: true },
    ] as Task[],
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
      }
    },
    deleteTask(id: string) {
      this.tasks = this.tasks.filter((task) => task.id !== id)
    },
  },
})

import { defineStore } from 'pinia'
import { ref, watch } from 'vue'

export const useGardenStore = defineStore('garden', () => {
  const selectedBackground = ref<string>(
    localStorage.getItem('gardenBackground') || '/backgrounds/forest.png',
  )

  const setBackground = (newBackground: string) => {
    selectedBackground.value = newBackground
  }

  watch(selectedBackground, (newBackground) => {
    localStorage.setItem('gardenBackground', newBackground)
  })

  return { selectedBackground, setBackground }
})

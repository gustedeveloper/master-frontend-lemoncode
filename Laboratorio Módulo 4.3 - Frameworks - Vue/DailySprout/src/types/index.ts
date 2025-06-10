export interface Task {
  id: string
  title: string
  status: 'Just started!' | 'In progress!' | 'Completed!' | ''
  showInGarden: boolean
  archived: boolean
  selectedFlower: string
  gardenId?: string
}

export interface Garden {
  id: string
  name: string
  selectedBackground: string
}

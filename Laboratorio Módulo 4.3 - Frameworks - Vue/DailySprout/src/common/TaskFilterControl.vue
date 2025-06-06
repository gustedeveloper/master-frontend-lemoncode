<script setup lang="ts">
const emit = defineEmits(['update:modelValue'])

const setFilter = (value: string) => {
  emit('update:modelValue', value)
}
</script>

<template>
  <div class="filter-control">
    <button class="pixel-button modify" @click="setFilter('All')">All</button>

    <button class="pixel-button modify" @click="setFilter('Just started!')">Just started</button>

    <button class="pixel-button modify" @click="setFilter('In progress!')">In progress</button>

    <button class="pixel-button modify" @click="setFilter('Completed!')">Completed</button>

    <button class="pixel-button modify" @click="setFilter('In garden')">In garden</button>
  </div>
</template>

<style scoped>
.filter-control {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}
</style>

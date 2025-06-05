<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>

<style>
body {
  margin: 0;
  background-image: url('/backgrounds/bg.png');
  background-size: cover;

  background-repeat: no-repeat;
  height: 100vh;
}
</style>

<style scoped></style>

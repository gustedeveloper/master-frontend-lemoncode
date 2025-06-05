<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav>
      <div class="logo">
        <img class="logo-image" src="/logo.png" alt="Daily Sprout logo" />
      </div>
      <RouterLink to="/" class="nav-link pixel-button">Home</RouterLink>
      <RouterLink to="/task-management" class="nav-link pixel-button">Task Management</RouterLink>
      <RouterLink to="/about" class="nav-link pixel-button">About</RouterLink>
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

#app {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.logo img {
  width: 150px;
}

nav {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 50px;
  gap: 50px;
  margin-bottom: 50px;
}

.nav-link {
  height: 50px;
  min-width: 100px;
  font-size: 20px;
  text-align: center;
  background-color: var(--pixel-tertiary-button-bg);
  border: 3px solid var(--pixel-tertiary-button-border);
  text-decoration: none;
  color: var(--pixel-tertiary-button-border);
}

.nav-link:hover {
  background-color: var(--pixel-tertiary-button-hover);
}
</style>

<style scoped></style>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="sky-scroll">
    <img src="/backgrounds/bg.png" class="sky" />
    <img src="/backgrounds/bg.png" class="sky" />
  </div>

  <header>
    <nav>
      <div class="logo">
        <img class="logo-image" src="/logo.png" alt="Daily Sprout logo" />
      </div>
      <div class="nav-links">
        <RouterLink to="/" class="nav-link pixel-button">Home</RouterLink>
        <RouterLink to="/task-management" class="nav-link pixel-button management"
          >Task Management</RouterLink
        >
        <RouterLink to="/about" class="nav-link pixel-button">About</RouterLink>
      </div>
    </nav>
  </header>

  <RouterView />
</template>

<style>
body {
  background-color: var(--pixel-sky-bg);
  margin: 0;
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

.nav-links {
  display: flex;
  gap: 50px;
}

.nav-link {
  height: 50px;
  min-width: 70px;
  max-width: 100%;
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

.router-link-active {
  background-color: var(--pixel-tertiary-button-hover);
}

.sky-scroll {
  position: fixed;
  top: 0;
  left: 0;
  width: 200%;
  height: 100vh;
  overflow: hidden;
  z-index: -1;
  display: flex;
}

.sky {
  width: 100%;
  animation: moveClouds 120s linear infinite;
}

.sky:nth-child(2) {
  margin-left: -1px;
}

@keyframes moveClouds {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
}

@media (max-width: 817px) {
  nav {
    margin-bottom: 0;
    flex-direction: column;
  }

  .nav-links {
    display: flex;
    justify-content: center;
  }

  .nav-link {
    font-size: 16px;
  }

  .management {
    height: auto;
  }
}

@media (max-width: 500px) {
  nav {
    width: 100%;
    padding: 30px;
  }
  .nav-links {
    gap: 20px;
  }

  .nav-link {
    font-size: 14px;
  }
}
</style>

<style scoped></style>

<script setup lang="ts"></script>

<template>
  <div class="main-container">
    <div class="floating-summary">
      <h3>Welcome to Daily Sprouts!</h3>
      <p>
        <strong>Daily Sprouts</strong> is a task manager with a charming pixel art aesthetic. In
        this project, your task progress is uniquely visualized: each task starts as a small sprout,
        grows as you advance, and fully blooms upon completion.
      </p>
      <p>
        <strong>Developed with Vue.js</strong>, Daily Sprouts helps you organize your day-to-day in
        a visual and motivating way.
      </p>
    </div>
  </div>
</template>

<style scoped>
.main-container {
  display: flex;
  justify-content: center;
  margin-top: 100px;
}

.floating-summary {
  width: 400px;
  padding: 20px;
  background-color: var(--pixel-bg);
  border: 2px solid var(--pixel-border);
  box-shadow: 4px 4px 0px var(--pixel-shadow);
  font-family: var(--pixel-font);
  color: var(--pixel-primary-button-border);
}

.floating-summary h3 {
  margin-top: 0;
  font-size: 1.2em;
  color: #333;
}

.floating-summary p {
  font-size: 0.8em;
  line-height: 1.5;
  margin-bottom: 10px;
  color: #333;
}

@media (max-width: 500px) {
  .floating-summary {
    width: 300px;
  }
}
</style>

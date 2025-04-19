<script setup>
import Navigation from './components/Navigation.vue'
</script>

<template>
  <div class="app">
    <Navigation />
    <main class="content">
      <router-view />
    </main>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  background-color: #121212;
  color: #e0e0e0;
}

.app {
  min-height: 100vh;
}

.content {
  margin-left: 250px;
  padding: 2rem;
  min-height: 100vh;
  background-color: #121212;
}

a {
  color: inherit;
  text-decoration: none;
}
</style>

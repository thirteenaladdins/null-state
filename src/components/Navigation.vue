<template>
  <nav class="sidebar">
    <div class="logo">
      <h1>NS</h1>
    </div>
    <ul class="nav-links" ref="navList">
      <li v-for="(item, index) in navItems" :key="item.path">
        <router-link 
          :to="item.path" 
          :class="{ active: currentIndex === index }"
          @click="selectItem(index)"
        >
          <span class="caret" v-if="currentIndex === index">></span>
          <span class="folder-icon">📁</span>
          <span class="item-name">{{ item.name }}</span>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const navList = ref(null)
const currentIndex = ref(0)

const navItems = [
  { name: 'Landing', path: '/' },
  { name: 'Profiles', path: '/profiles' },
  { name: 'Logs', path: '/logs' }
]

const selectItem = (index) => {
  currentIndex.value = index
  router.push(navItems[index].path)
}

const handleKeyDown = (e) => {
  switch(e.key) {
    case 'ArrowUp':
      e.preventDefault()
      currentIndex.value = Math.max(0, currentIndex.value - 1)
      break
    case 'ArrowDown':
      e.preventDefault()
      currentIndex.value = Math.min(navItems.length - 1, currentIndex.value + 1)
      break
    case 'Enter':
      e.preventDefault()
      router.push(navItems[currentIndex.value].path)
      break
  }
}

onMounted(() => {
  document.addEventListener('keydown', handleKeyDown)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeyDown)
})
</script>

<style scoped>
.sidebar {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: 250px;
  background-color: #0a0a0a;
  padding: 2rem 1rem;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.3);
}

.logo {
  margin-bottom: 3rem;
  text-align: center;
}

.logo h1 {
  font-family: monospace;
  font-size: 2rem;
  color: #00ff00;
  font-weight: 300;
  text-shadow: 0 0 5px rgba(0, 255, 0, 0.5);
}

.nav-links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.nav-links li {
  margin-bottom: 0.5rem;
}

.nav-links a {
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  color: #00ff00;
  text-decoration: none;
  font-family: monospace;
  font-size: 1rem;
  border-radius: 2px;
  transition: all 0.2s ease;
  text-shadow: 0 0 5px rgba(0, 255, 0, 0.3);
}

.nav-links a:hover {
  background-color: rgba(0, 255, 0, 0.1);
}

.nav-links a.active {
  background-color: rgba(0, 255, 0, 0.15);
}

.caret {
  margin-right: 0.5rem;
  color: #00ff00;
}

.folder-icon {
  margin-right: 0.5rem;
  font-size: 1.1rem;
}

.item-name {
  flex: 1;
}
</style> 
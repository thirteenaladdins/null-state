<template>
  <div class="profiles">
    <h1>Profiles</h1>
    <div class="character-grid">
      <div 
        class="character-card" 
        v-for="character in characters" 
        :key="character.id"
        @click="selectedCharacter = character"
      >
        <div class="character-image">
          <img :src="character.image" :alt="character.name">
        </div>
        <div class="character-info">
          <h2>{{ character.name }}</h2>
          <p class="character-description">{{ character.description }}</p>
          <div class="character-stats">
            <div class="stat" v-for="(value, stat) in character.stats" :key="stat">
              <span class="stat-name">{{ stat }}:</span>
              <span class="stat-value">{{ value }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Expanded View -->
    <div class="expanded-view" v-if="selectedCharacter" @click.self="selectedCharacter = null">
      <div class="expanded-content">
        <div class="expanded-image">
          <img :src="selectedCharacter.image" :alt="selectedCharacter.name">
        </div>
        <div class="expanded-info">
          <h2>{{ selectedCharacter.name }}</h2>
          <p class="expanded-description">{{ selectedCharacter.description }}</p>
          <div class="expanded-stats">
            <div class="stat" v-for="(value, stat) in selectedCharacter.stats" :key="stat">
              <span class="stat-name">{{ stat }}:</span>
              <span class="stat-value">{{ value }}</span>
            </div>
          </div>
        </div>
        <button class="close-button" @click="selectedCharacter = null">×</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const selectedCharacter = ref(null)

const characters = [
  {
    id: 1,
    name: "Character Name",
    description: "A detailed description of the character's background, personality, and role in the story.",
    image: import.meta.env.PROD ? "/null-state/images/characters/0D79E151-12A8-450A-8047-511E216BDA8D_1_105_c.jpeg" : "/images/characters/0D79E151-12A8-450A-8047-511E216BDA8D_1_105_c.jpeg",
    stats: {
      "Level": 1,
      "Class": "Warrior",
      "Alignment": "Neutral"
    }
  }
  // Add more characters as needed
]
</script>

<style scoped>
.profiles {
  padding: 2rem;
  color: #e0e0e0;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 2rem;
  font-weight: 300;
}

.character-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  padding: 1rem;
}

.character-card {
  background-color: #1a1a1a;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  cursor: pointer;
}

.character-card:hover {
  transform: translateY(-5px);
}

.character-image {
  width: 100%;
  height: 300px;
  overflow: hidden;
}

.character-image img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  background-color: #0a0a0a;
}

.character-info {
  padding: 1.5rem;
}

.character-info h2 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #00ff00;
  font-family: monospace;
}

.character-description {
  margin-bottom: 1.5rem;
  line-height: 1.6;
  opacity: 0.8;
}

.character-stats {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;
  font-family: monospace;
}

.stat {
  display: flex;
  justify-content: space-between;
  padding: 0.5rem;
  background-color: rgba(0, 255, 0, 0.1);
  border-radius: 4px;
}

.stat-name {
  color: #00ff00;
}

.stat-value {
  color: #e0e0e0;
}

/* Expanded View Styles */
.expanded-view {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 2rem;
}

.expanded-content {
  display: flex;
  background-color: #1a1a1a;
  border-radius: 8px;
  width: 90%;
  height: 90%;
  position: relative;
  overflow: hidden;
}

.expanded-image {
  width: 50%;
  height: 100%;
  overflow: hidden;
}

.expanded-image img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  background-color: #0a0a0a;
}

.expanded-info {
  width: 50%;
  padding: 2rem;
  overflow-y: auto;
}

.expanded-info h2 {
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: #00ff00;
  font-family: monospace;
}

.expanded-description {
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 2rem;
  opacity: 0.9;
}

.expanded-stats {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  font-family: monospace;
}

.close-button {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  color: #00ff00;
  font-size: 2rem;
  cursor: pointer;
  padding: 0.5rem 1rem;
  font-family: monospace;
  transition: opacity 0.3s ease;
}

.close-button:hover {
  opacity: 0.7;
}
</style> 
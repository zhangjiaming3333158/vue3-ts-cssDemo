<template>
  <div class="container">
    <div
      class="panel"
      v-for="(panel, index) in panels"
      :key="index"
      @click="activatePanel(index)"
      :class="{ active: activePanel === index }"
      :style="{ backgroundImage: panel.image }"
    >
      <h3>{{ panel.title }}</h3>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const panels = ref([
  {
    image:
      "url('https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80')",
    title: 'Explore The World',
  },
  {
    image:
      "url('https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80')",
    title: 'Wild Forest',
  },
  {
    image:
      "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80')",
    title: 'Sunny Beach',
  },
  {
    image:
      "url('https://images.unsplash.com/photo-1551009175-8a68da93d5f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80')",
    title: 'City on Winter',
  },
  {
    image:
      "url('https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80')",
    title: 'Mountains - Clouds',
  },
])

const activePanel = ref(0)

const activatePanel = (index: number) => {
  activePanel.value = index
}
</script>

<style scoped lang="scss">
.container {
  height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  .panel {
    display: flex;
    flex: 0.5;
    flex-direction: column;
    align-items: start;
    justify-content: flex-end;
    margin: 0 10px;
    box-sizing: border-box;
    padding: 0 20px;
    height: 80%;
    border-radius: 45px;
    cursor: pointer;
    background-size: cover;
    background-position: center;
    font-size: 20px;
    color: white;
    text-align: center;
    -webkit-transition: all 700ms ease-in;
    h3 {
      opacity: 0;
      display: none;
    }
    &.active {
      flex: 10;
      h3 {
        display: block;
        opacity: 1;
        transition: opacity 0.3s ease-in 0.4s;
      }
    }
  }
}
</style>

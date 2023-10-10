<template>
  <div class="body">
    <div class="search" ref="search">
      <input type="text" class="input" placeholder="Search..." />
      <button class="btn" @click="showInput">
        <Search style="width: 30px; height: 30px; margin-right: 0" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const search = ref<HTMLElement | null>(null)
const showInput = () => {
  const input = search.value?.querySelector('.input') as HTMLInputElement
  search.value?.classList.toggle('active')
  input?.focus()
}
</script>

<style scoped lang="scss">
.body {
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(90deg, #7d5fff, #7158e2);
  font-family: 'Roboto', sans-serif;
  height: 100vh;
  overflow: hidden;
  margin: 0;
  .search {
    position: relative;
    display: flex;
    &.active .input {
      width: 200px;
    }
    &.active .btn {
      transform: translateX(198px);
    }
    .input {
      background-color: #fff;
      border: 0;
      font-size: 18px;
      padding: 15px;
      height: 50px;
      width: 50px;
      transition: width 0.3s ease;
      &:focus {
        outline: none;
      }
    }
    .btn {
      background-color: #fff;
      border: 0;
      cursor: pointer;
      font-size: 24px;
      position: absolute;
      top: 0;
      left: 0;
      height: 50px;
      width: 50px;
      transition: transform 0.3s ease;
      &:focus {
        outline: none;
      }
    }
  }
}
</style>

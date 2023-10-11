<template>
  <div class="body">
    <section class="bg" ref="bgs"></section>
    <div class="loading-text" ref="loadingText">0%</div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const bgs = ref<HTMLElement | null>(null)
const loadingText = ref<HTMLElement | null>(null)
let load = 0
console.log(bgs, loadingText, load)
const blurring = () => {
  load++
  if (load > 99) {
    clearInterval(timer)
  }
  loadingText.value!.innerText = `${load}%`
  loadingText.value!.style.opacity = `${1 - load / 100}`
  bgs.value!.style.filter = `blur(${100 - load}px)`
}
const timer = setInterval(blurring, 30)
</script>

<style scoped lang="scss">
.body {
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow: hidden;
  .bg {
    background: url('https://images.unsplash.com/photo-1576161787924-01bb08dad4a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2104&q=80')
      no-repeat center center/cover;
    position: absolute;
    top: -30px;
    left: -30px;
    width: calc(100vw + 30px);
    height: calc(100vh + 30px);
    z-index: -1;
    filter: blur(0px);
  }
  .loading-text {
    font-size: 50px;
    color: #fff;
  }
}
</style>

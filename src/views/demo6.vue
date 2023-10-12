<template>
  <div class="body">
    <div class="title">Scroll to see the animation</div>
    <div class="content" v-for="(_, index) in 13" :key="index">
      <div class="item" :class="{ 'even-item': index % 2 === 1 }" ref="item">Content</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

let boxes: any = []

onMounted(() => {
  boxes = document.querySelectorAll('.item')
  window.addEventListener('scroll', checkBoxes)
  checkBoxes()
  console.log(boxes)
})

function checkBoxes() {
  const triggerBottom = (window.innerHeight / 5) * 4
  boxes.forEach((box: any) => {
    const boxTop = box.getBoundingClientRect().top
    if (boxTop < triggerBottom) {
      box.classList.add('show')
    } else {
      box.classList.remove('show')
    }
  })
}
</script>

<style scoped lang="scss">
.body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  overflow-x: hidden;
  .title {
    margin: 10px;
    height: 50px;
    font-size: 30px;
    font-weight: bolder;
    color: #000;
    line-height: 50px;
    text-align: center;
  }
  .content {
    flex: 1;
    display: flex;
    flex-direction: column;
    height: 100%;
    .item {
      margin: 10px;
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      min-width: 400px;
      min-height: 200px;
      background-color: steelblue;
      border-radius: 10px;
      box-shadow: 2px 4px 5px rgba(0, 0, 0, 0.3);
      text-align: center;
      font-size: 50px;
      font-weight: bolder;
      color: #fff;
      padding: 20px;
      //动画
      transform: translateX(400%);
      transition: transform 0.4s ease;
      &.even-item {
        transform: translateX(-400%);
      }
      &.show {
        transform: translateX(0);
      }
    }
  }
}
</style>

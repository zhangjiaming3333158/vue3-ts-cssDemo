<template>
  <div class="body">
    <div class="right">
      <router-link
        v-for="item in 12"
        :key="item"
        :to="`/demo${item}`"
        @click="changeItem(item)"
        :class="item === Item ? 'active' : ''"
        >{{ item }}</router-link
      >
    </div>
    <div class="left"><router-view></router-view></div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
let Item = ref(1)
const changeItem = (item: number) => {
  Item.value = item
}
</script>

<style scoped lang="scss">
.body {
  display: flex;
  .right {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    min-height: 100vh;
    min-width: 50px;
    z-index: 999;
    background-color: #545c64;
    a {
      margin-bottom: 10px;
      display: block;
      height: 30px;
      text-align: center;
      line-height: 30px;
      border-bottom: 1px solid #fff;
      // 去除a标签固定样式
      text-decoration: none;
      color: #fff;
    }
    .active {
      color: #39c5bb;
      border-bottom: 1px solid #39c5bb;
    }
  }
  .left {
    flex: 1;
  }
}
</style>

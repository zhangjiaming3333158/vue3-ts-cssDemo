<template>
  <div class="body">
    <div class="right">
      <router-link to="/demo1">1</router-link>
      <router-link to="/demo2">2</router-link>
      <router-link to="/demo3">3</router-link>
      <router-link to="/demo4">4</router-link>
      <router-link to="/demo5">5</router-link>
      <router-link to="/demo6">6</router-link>
      <router-link to="/demo7">7</router-link>
      <router-link to="/demo8">8</router-link>
    </div>
    <div class="left"><router-view></router-view></div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.body {
  display: flex;
  .right {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    min-height:100vh ;
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
  }
  .left {
    flex: 1;
  }
}
</style>

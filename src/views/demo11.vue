<template>
  <div class="body">
    <div class="insert" v-if="!show">
      <div class="key">Press any key to get the keyCode</div>
    </div>
    <div class="show" v-if="show">
      <div class="event">
        <div class="text">event.key</div>
        <div class="showKey">{{ showKey[0] }}</div>
      </div>
      <div class="event">
        <div class="text">event.keyCode</div>
        <div class="showKey">{{ showKey[1] }}</div>
        <div></div>
      </div>
      <div class="event">
        <div class="text">event.code</div>
        <div class="showKey">{{ showKey[2] }}</div>
        <div></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
let show = ref(false)
const showKey: any = (event: KeyboardEvent) => {
  if (show.value) {
    const key = event.key
    const keyCode = event.keyCode
    const code = event.code
    const showKey = document.querySelectorAll('.showKey')
    showKey[0].innerHTML = key
    showKey[1].innerHTML = keyCode.toString()
    showKey[2].innerHTML = code
  }
}
const changeShow = () => {
  if (show.value == false) {
    show.value = !show.value
  }
}


window.addEventListener('keydown', showKey)
window.addEventListener('keyup', changeShow)
</script>

<style scoped>
.body {
  margin: 0;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  overflow: hidden;
  background-color: #e1e1e1;
  .insert {
    width: 500px;
    height: 100px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 0 10px #ccc;
    .key {
      font-size: 20px;
      font-weight: bolder;
      color: #333;
      line-height: 100px;
    }
  }
  .show {
    width: 600px;
    height: 150px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .event {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .text {
        margin-bottom: 10px;
        font-size: 20px;
        font-weight: bolder;
        color: #333;
      }
      .showKey {
        width: 80%;
        height: 70px;
        background-color: #fff;
        border-radius: 10px;
        box-shadow: 0 0 10px #ccc;
        font-size: 20px;
        font-weight: bolder;
        color: #333;
        line-height: 70px;
        text-align: center;
      }
    }
  }
}
</style>

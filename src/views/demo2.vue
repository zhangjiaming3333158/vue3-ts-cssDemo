<template>
  <div class="body">
    <div class="container">
      <div class="top">
        <div v-for="(item, index) in 4" :key="index">
          <div class="circel" :class="{ active: activePanel.includes(index) }">
            <text>{{ item }}</text>
          </div>
        </div>
        <div class="line1" :class="{ active: activePanel.length >= 2 }"></div>
        <div class="line2" :class="{ active: activePanel.length >= 3 }"></div>
        <div class="line3" :class="{ active: activePanel.length >= 4 }"></div>
      </div>
      <div class="bottom">
        <button
          class="button"
          :class="{ dis: activePanel.length === 1 }"
          @click="prev"
        >
          prev
        </button>
        <button
          class="button"
          :class="{ dis: activePanel.length === 4 }"
          @click="next"
        >
          next
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
const activePanel = reactive([0])
const prev = () => {
  if (activePanel.length > 1) {
    activePanel.pop()
  }
}
const next = () => {
  if (activePanel.length < 4) {
    activePanel.push(activePanel[activePanel.length - 1] + 1)
    console.log(activePanel)
  }
}
</script>

<style scoped lang="scss">
$choose: #3498db;
$unchoose: #e0e0e0;

.body {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: #f6f7fb;
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 30%;
    height: 150px;
    .top {
      position: relative;
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 50%;
      width: 100%;
      div {
        margin: auto;
        flex: 1;
        text-align: center;
        .circel {
          box-sizing: border-box;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          border: 3px solid $unchoose;
          color: #999;
          transition: 0.4s ease;
          &.active {
            border: 3px solid $choose;
          }
        }
      }
      .line1,
      .line2,
      .line3 {
        position: absolute;
        width: 76.8px;
        height: 3px;
        transition: 0.4s ease;
        &.active {
          background-color: $choose;
        }
      }
      .line1 {
        left: 67px;
        background-color: $unchoose;
      }
      .line2 {
        left: 171px;
        background-color: $unchoose;
      }
      .line3 {
        left: 275px;
        background-color: $unchoose;
      }
    }
    .bottom {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      height: 50%;
      width: 80%;
      .button {
        cursor: pointer;
        margin: 0 10px;
        width: 30%;
        height: 45%;
        background-color: $choose;
        color: #fff;
        border: none;
        border-radius: 5px;
        &.dis {
          cursor: not-allowed;
          background-color: $unchoose;
        }
      }
    }
  }
}
</style>

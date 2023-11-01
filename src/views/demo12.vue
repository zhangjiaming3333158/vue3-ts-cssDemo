<template>
  <div class="body">
    <h1>Frequently Asked Questions</h1>
    <div class="faq-container">
      <div class="faq" :class="{ active: show[i-1] }" v-for="i in 5" :key="i">
        <h3 class="faq-title">{{ title[i - 1] }}</h3>

        <p class="faq-text">{{ text[i - 1] }}</p>

        <button class="faq-toggle" @click="changeShow(i)">
          <i v-show="!show[i - 1]">v</i>
          <i v-show="show[i - 1]">^</i>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const show = ref([false, false, false, false, false])
const title = ref([
  "Why shouldn't we trust atoms?",
  'What do you call someone with no body and no nose?',
  "What's the object-oriented way to become wealthy?",
  'How many tickles does it take to tickle an octopus?',
  'What is: 1 + 1?',
])
const text = ref([
  'They make up everything',
  'Nobody knows.',
  'Inheritance.',
  'Ten-tickles!',
  'Depends on who are you asking.',
])
const changeShow = (i: number) => {
  show.value[i - 1] = !show.value[i - 1]
  console.log(1)
}
</script>

<style scoped lang="scss">
.body {
  width: 100%;
  height: 100%;
  background-color: #f0f0f0;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    margin: 50px 0 30px;
    text-align: center;
  }
  .faq-container {
    max-width: 600px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    .faq {
      position: relative;
      margin: 10px 0;
      padding: 30px;
      background-color: transparent;
      border: 1px solid #9fa4a8;
      border-radius: 10px;
      overflow: hidden;
      transition: 0.3s ease;
      .faq-title {
        margin: 0 35px 0 0;
      }

      .faq-text {
        display: none;
        margin: 30px 0 0;
      }
      .faq-toggle {
        position: absolute;
        top: 30px;
        right: 30px;
        padding: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid #9fa4a8;
        border-radius: 50%;
        font-size: 16px;
        height: 30px;
        width: 30px;
        background-color: transparent;
        cursor: pointer;
      }
    }
    .active {
      background-color: #fff;
      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1), 0 3px 6px rgba(0, 0, 0, 0.1);
      .faq-text {
        display: block;
      }
    }

    .active::before,
    .active::after {
      color: #2ecc71;
      font-size: 7rem;
      position: absolute;
      opacity: 0.2;
      top: 20px;
      left: 20px;
      z-index: 0;
    }

    .active::before {
      color: #3498db;
      top: -10px;
      left: -30px;
      transform: rotateY(180deg);
    }
  }
}
</style>

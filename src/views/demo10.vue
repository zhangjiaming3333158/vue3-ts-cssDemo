<template>
  <div class="body">
    <div class="container">
      <h3>Don't Laugh Challenge</h3>
      <div id="joke" class="joke">// Joke goes here</div>
      <button id="jokeBtn" class="btn" @click="getJoke">
        Get Another Joke
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
// const getJoke = () => {
//   fetch('https://icanhazdadjoke.com/', {
//     headers: {
//       Accept: 'application/json',
//     },
//   })
//     .then((res) => res.json())
//     .then((data) => {
//       const joke = document.getElementById('joke') as HTMLDivElement
//       joke.innerHTML = data.joke
//     })
// }

import { getJokes } from '../api/jokes'
import { onMounted } from 'vue'
const getJoke = async () => {
  const res: any = await getJokes()
  const joke = document.getElementById('joke') as HTMLDivElement
  joke.innerHTML = res.joke
}
onMounted(() => {
  getJoke()
})
</script>

<style scoped lang="scss">
.body {
  background-color: #686de0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  overflow: hidden;
  .container {
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1), 0 6px 6px rgba(0, 0, 0, 0.1);
    padding: 50px 20px;
    text-align: center;
    max-width: 100%;
    width: 800px;
    h3 {
      margin: 0;
      opacity: 0.5;
      letter-spacing: 2px;
    }
    .joke {
      font-size: 30px;
      letter-spacing: 1px;
      line-height: 40px;
      margin: 50px auto;
      max-width: 600px;
    }
    .btn {
      background-color: #9f68e0;
      color: #fff;
      border: 0;
      border-radius: 10px;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1), 0 6px 6px rgba(0, 0, 0, 0.1);
      padding: 14px 40px;
      font-size: 16px;
      cursor: pointer;
    }
  }
}
</style>

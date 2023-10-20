<template>
  <div class="body">
    <audio id="applause" :src="applause"></audio>
    <audio id="boo" :src="boo"></audio>
    <audio id="gasp" :src="gasp"></audio>
    <audio id="tada" :src="tada"></audio>
    <audio id="victory" :src="victory"></audio>
    <audio id="wrong" :src="wrong"></audio>

    <div
      id="btn"
      v-for="item in ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']"
      :key="item"
      @click="openAudio(item)"
    >
      {{ item }}
    </div>
  </div>
</template>

<script setup lang="ts">
import applause from '../assets/sounds/applause.mp3'
import boo from '../assets/sounds/boo.mp3'
import gasp from '../assets/sounds/gasp.mp3'
import tada from '../assets/sounds/tada.mp3'
import victory from '../assets/sounds/victory.mp3'
import wrong from '../assets/sounds/wrong.mp3'

const openAudio = (id: string) => {
  const audio = document.getElementById(id) as HTMLAudioElement
  audio.currentTime = 0
  audio.play()
}
</script>

<style scoped lang="scss">
.body {
  width: 100%;
  height: 100%;
  background-color: rgb(161, 100, 223);
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100vh;
  overflow: hidden;
  margin: 0;
  #btn {
    background-color: rebeccapurple;
    border-radius: 5px;
    border: none;
    color: #fff;
    margin: 1rem;
    padding: 1.5rem 3rem;
    font-size: 1.2rem;
    font-family: inherit;
    cursor: pointer;
    &:hover {
      opacity: 0.9;
    }
    &:focus {
      outline: none;
    }
  }
}
</style>

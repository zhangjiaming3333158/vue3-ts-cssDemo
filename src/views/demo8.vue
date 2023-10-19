<template>
  <div class="body">
    <div class="container">
      <h1>Please Login</h1>
      <form>
        <div class="form-control">
          <input type="text" required />
          <label
            ><span
              v-for="(item, index) in 'Email'"
              :key="index"
              :style="{ 'transition-delay': `${index * 50}ms` }"
              >{{ item }}</span
            ></label
          >
        </div>
        <div class="form-control">
          <input type="password" required />
          <label
            ><span
              v-for="(item, index) in 'Password'"
              :key="index"
              :style="{ 'transition-delay': `${index * 50}ms` }"
              >{{ item }}</span
            ></label
          >
        </div>

        <button class="btn">Login</button>

        <p class="text">Don't have an account? <a href="#">Register</a></p>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
const email = ref<HTMLElement | null>(null)
const password = ref<HTMLElement | null>(null)
console.log(email.value, password)
onMounted(() => {
  const emailLabelElement = email.value
  const passwordLabelElement = password.value

  applyTransitionAnimation(emailLabelElement)
  applyTransitionAnimation(passwordLabelElement)
})

const applyTransitionAnimation = (label: HTMLElement | null) => {
  if (label) {
    label.innerHTML = label.innerText
      .split('')
      .map(
        (letter: any, idx: any) =>
          `<span style="transition-delay:${idx * 50}ms">${letter}</span>`
      )
      .join('')
  }
}
</script>

<style scoped lang="scss">
.body {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: steelblue;
  color: #fff;
  .container {
    background-color: rgba(0, 0, 0, 0.4);
    padding: 20px 40px;
    border-radius: 5px;
    h1 {
      text-align: center;
      margin-bottom: 30px;
    }

    .btn {
      margin-bottom: 20px;
      cursor: pointer;
      display: inline-block;
      width: 100%;
      background: lightblue;
      padding: 15px;
      font-size: 16px;
      border: 0;
      border-radius: 5px;
    }

    a {
      text-decoration: none;
      color: lightblue;
    }

    .form-control {
      position: relative;
      margin: 20px 0 40px;
      width: 300px;
      input {
        background-color: transparent;
        border: 0;
        border-bottom: 2px #fff solid;
        display: block;
        width: 100%;
        padding: 15px 0;
        font-size: 18px;
        color: #fff;

        &:focus,
        &:valid {
          outline: none;
          border-bottom-color: lightblue;
        }
      }
      label {
        position: absolute;
        top: 15px;
        left: 0;
        pointer-events: none;
        span {
          display: inline-block;
          font-size: 18px;
          min-width: 5px;
          transition: 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }
      }
    }
    .form-control input:focus + label span,
    .form-control input:valid + label span,
    .form-control input:focus + span,
    .form-control input:valid + span {
      color: lightblue;
      transform: translateY(-30px);
    }
  }
}
</style>

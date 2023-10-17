<template>
  <div class="content">
    <div class="left" @mouseenter="hoverLeftEnter" @mouseleave="hoverLeftLeave">
      <h1>Playstation 5</h1>
      <button><a href="#" class="btn">Buy Now</a></button>
    </div>
    <div
      class="right"
      @mouseenter="hoverRightEnter"
      @mouseleave="hoverRightLeave"
    >
      <h1>XBox Series X</h1>
      <button><a href="#" class="btn">Buy Now</a></button>
    </div>
  </div>
</template>

<script setup lang="ts">
const left = document.querySelector('.left')
const hoverLeftEnter = () => {
  left?.classList.add('hover-left')
  right?.classList.add('hover-left')
}
const hoverLeftLeave = () => {
  left?.classList.remove('hover-left')
  right?.classList.remove('hover-left')
}

const right = document.querySelector('.right')
const hoverRightEnter = () => {
  left?.classList.add('hover-right')
  right?.classList.add('hover-right')
}
const hoverRightLeave = () => {
  left?.classList.remove('hover-right')
  right?.classList.remove('hover-right')
}
</script>

<style scoped lang="scss">
$--left-bg-color: rgba(87, 84, 236, 0.7);
$--right-bg-color: rgba(43, 43, 43, 0.8);
$--left-btn-hover-color: rgba(87, 84, 236, 1);
$--right-btn-hover-color: rgba(28, 122, 28, 1);
$--hover-width: 75%;
$--other-width: 25%;
$--speed: 1000ms;
.content {
  display: flex;
  height: 100%;
  width: 100%;
  .left {
    background: url('../assets/img7/ps.jpg') no-repeat;
    background-size: cover;
    &::before {
      background-color: $--left-bg-color;
    }
    button {
      &:hover {
        background-color: $--left-btn-hover-color;
        border: $--left-btn-hover-color solid 0.2rem;
      }
    }
  }
  .right {
    background: url('../assets/img7/xbox.jpg') no-repeat;
    background-size: cover;
    &::before {
      background-color: $--right-bg-color;
    }
    button {
      &:hover {
        background-color: $--right-btn-hover-color;
        border: $--right-btn-hover-color solid 0.2rem;
      }
    }
  }
  .left,
  .right {
    position: relative;
    overflow: hidden;
    width: 50%;
    height: 100%;
    transition: all $--speed ease-in-out;
    &::before {
      position: absolute;
      content: '';
      width: 100%;
      height: 100%;
      transition: all $--speed ease-in-out;
    }
    h1 {
      font-size: 4rem;
      color: #fff;
      position: absolute;
      left: 50%;
      top: 20%;
      transform: translateX(-50%);
      white-space: nowrap;
    }
    button {
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      left: 50%;
      top: 40%;
      transform: translateX(-50%);
      text-decoration: none;
      border: #fff solid 0.2rem;
      background-color: transparent;
      font-size: 1rem;
      font-weight: bold;
      text-transform: uppercase;
      width: 15rem;
      padding: 1.5rem;
      a {
        color: #fff;
        text-decoration: none;
      }
    }
  }
}
.hover-left {
  .left {
    width: $--hover-width;
  }
  .right {
    width: $--other-width;
  }
}

.hover-right {
  .left {
    width: $--other-width;
  }
  .right {
    width: $--hover-width;
  }
}
@media (max-width: 800px) {
  .content h1 {
    font-size: 2rem;
    top: 30%;
  }
  .content button {
    padding: 1.2rem;
    width: 12rem;
  }
}
</style>

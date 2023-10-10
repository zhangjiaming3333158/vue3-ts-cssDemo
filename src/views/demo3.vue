<template>
  <div class="body">
    <div class="container" ref="container">
      <div class="circle-container">
        <div class="circle">
          <button id="close" @click="Close">
            <i class="fas fa-times">2</i>
          </button>
          <button id="open" @click="Open">
            <i class="fas fa-bars">1</i>
          </button>
        </div>
      </div>

      <div class="content">
        <h1>Amazing Article</h1>
        <small>Florin Pop</small>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          quia in ratione dolores cupiditate, maxime aliquid impedit dolorem nam
          dolor omnis atque fuga labore modi veritatis porro laborum minus,
          illo, maiores recusandae cumque ipsa quos. Tenetur, consequuntur
          mollitia labore pariatur sunt quia harum aut. Eum maxime dolorem
          provident natus veritatis molestiae cumque quod voluptates ab non,
          tempore cupiditate? Voluptatem, molestias culpa. Corrupti, laudantium
          iure aliquam rerum sint nam quas dolor dignissimos in error placeat
          quae temporibus minus optio eum soluta cupiditate! Cupiditate saepe
          voluptates laudantium. Ducimus consequuntur perferendis consequatur
          nobis exercitationem molestias fugiat commodi omnis. Asperiores quia
          tenetur nemo ipsa.
        </p>

        <h3>My Dog</h3>
        <img
          src="https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
          alt="doggy"
        />
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit libero
          deleniti rerum quo, incidunt vel consequatur culpa ullam. Magnam
          facere earum unde harum. Ea culpa veritatis magnam at aliquid.
          Perferendis totam placeat molestias illo laudantium? Minus id minima
          doloribus dolorum fugit deserunt qui vero voluptas, ut quia cum amet
          temporibus veniam ad ea ab perspiciatis, enim accusamus asperiores
          explicabo provident. Voluptates sint, neque fuga cum illum, tempore
          autem maxime similique laborum odio, magnam esse. Aperiam?
        </p>
      </div>
    </div>

    <nav>
      <ul>
        <li><i class="fas fa-home"></i><a href="#"> Home</a></li>
        <li><i class="fas fa-user-alt"></i><a href="#"> About</a></li>
        <li><i class="fas fa-envelope"></i><a href="#"> Contact</a></li>
      </ul>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const container = ref<HTMLElement | null>(null)
const Close = () => {
  container?.value?.classList.remove('show-nav')
}
const Open = () => {
  container?.value?.classList.add('show-nav')
}
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css?family=Lato&display=swap'); //引入字体
* {
  box-sizing: border-box;
}
.container.show-nav + nav li {
  transform: translateX(0);
  transition-delay: 0.3s;
}
.container.show-nav .circle {
  transform: rotate(-70deg);
}
.body {
  font-family: 'Lato', sans-serif; //字体
  background-color: #333;
  color: #222;
  overflow-x: hidden; //水平方向溢出隐藏
  margin: 0;
  .container {
    position: relative;
    background-color: #fafafa;
    transform-origin: top left; //设置旋转的原点
    transition: transform 0.5s linear; //设置过渡效果
    width: 100vw;
    min-height: 100vh;
    &.show-nav {
      transform: rotate(-20deg) translateX(0);
    }
    .circle-container {
      position: fixed;
      transform: translateX(-50%) translateY(-50%);
      .circle {
        width: 200px;
        height: 200px;
        border-radius: 50%;
        background-color: #ff7979;
        position: relative;
        transition: transform 0.5s linear; //设置过渡效果
        button {
          cursor: pointer;
          position: absolute;
          top: 50%;
          left: 50%;
          height: 100px;
          background: transparent;
          border: 0;
          font-size: 26px;
          color: #fff;
        }
        button:focus {
          outline: none;
        }
        #open {
          left: 60%;
        }
        #close {
          top: 60%;
          transform: rotate(90deg);
          transform-origin: top left;
        }
      }
    }
    .content {
      // width: 100%;
      max-width: 1000px;
      margin: 0 auto;
      padding: 100px 0;
      h1 {
        margin: 0;
      }
      small {
        color: #555;
        font-style: italic;
      }
      p {
        color: #333;
        line-height: 1.5;
      }
      img {
        width: 100%;
        margin: 20px 0;
      }
    }
  }
  nav {
    position: fixed;
    bottom: 40px;
    left: 0;
    z-index: 100;
    ul {
      list-style-type: none; //去除列表样式
      padding-left: 30px;
      li {
        text-transform: uppercase; // 文本转换为大写
        color: #fff;
        margin: 40px 0;
        transform: translateX(-100%);
        transition: transform 0.4s ease-in;
        i {
          font-size: 20px;
          margin-right: 10px;
        }
        a {
          color: #fafafa;
          text-decoration: none; // 去除下划线
          transition: all 0.5s; // 设置过渡效果(颜色)
          &:hover {
            color: #ff7979;
            font-weight: bold;
          }
        }
      }
      li + li {
        margin-left: 15px;
        transform: translateX(-150%);
      }
      li + li + li {
        margin-left: 30px;
        transform: translateX(-200%);
      }
    }
  }
}
</style>

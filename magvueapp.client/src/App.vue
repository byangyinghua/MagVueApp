<script lang="ts">
  //这里的from路径根据自己的布局更改路径
  import HelloWorld from './components/HelloWorld.vue'
  import TheWelcome from './components/TheWelcome.vue'
  import Login from '@/views/login.vue'
  import Reg from '@/views/register.vue'
  import { defineComponent } from 'vue';
  export default defineComponent({
    name: 'App',
    data() {
      return {
        msg: "Login"
      }
    },
    components: {
      Login,
      Reg
    }
  });
</script>
<template>
  <div id="app">
    <div class="title">
      <div class="btn" @click="msg='Login'">登录</div>
      <div class="btn" @click="msg='Reg'">注册</div>
    </div>
    <component :is="msg"></component>
  </div>
</template>

<style scoped>
  header {
    line-height: 1.5;
  }

  .logo {
    display: block;
    margin: 0 auto 2rem;
  }

  @media (min-width: 1024px) {
    header {
      display: flex;
      place-items: center;
      padding-right: calc(var(--section-gap) / 2);
    }

    .title {
      width: 920px;
      height: 960px;
      padding: 0 50px;
      position: center;
      background-color: rgb(180,193,237);
      display: grid;
      grid-template-columns: auto auto; /*定义两列 */
     
      position: relative;
      left: 50px;
    }

    .btn {
    
      width: 210px;
      height: 45px;
      
    
      margin: 15px 20px;
      padding: 10px;
      border-radius: 15px;
      background-image: linear-gradient(to right, #ffd800, #00ffff);
      background-color: #fbc2eb;
      font: 20px;
      font-family: Arial;
      text-align: center;
      text-decoration: solid;
      text-shadow: 0px 1px 0px #2f6627;
    }

      .btn:hover {
        background-color: rgb(180,193,237);
      }

      .btn:active {
        position: relative;
        top: 4px;
      }
  }
</style>

<template>
    
    <div class="container">
        <div class="login-wrapper">
            <div class="header">登录</div>
       
            <el-form :model="loginForm" ref="loginFormRef" :rules="loginFormRules" label-width="100px" class="login_form">
                <el-form-item prop="username">
                    <el-input v-model="loginForm.username" prefix-icon="el-icon-user-solid"></el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input v-model="loginForm.password" show-password="true" prefix-icon="el-icon-lock"></el-input>
                </el-form-item>
                      

                <el-form-item class="btns">
                    <el-button type="primary" style="width: 100%" @click="login" round>登录</el-button>
                </el-form-item>
            </el-form>
        <!-- 账号
           <div class="header">登录</div>
           <div class="form-wrapper">
               <input type="text" name="username" placeholder="用户名" class="input-item">
               <input type="password" name="password" placeholder="密码" class="input-item">
               <div class="btn">登录</div>
           </div>
       -->

       </div> 
    </div>
  
</template>

<script lang="ts">    
    import { defineComponent } from 'vue'
    //import  request from "./utils/request"
   //import ValidCode from 'ValidCode'
   // const Base64 = require('js-base64').Base64
    export default defineComponent({
     
        components: {
         //  ValidCode 
        },
        directives: {
        },
        filters: {
        },
        props: {
        },
        data() {           
            return {
                 loginForm:{
                    username: 'qqqq',
                    password:'123456'
                 },
                // checked: false,
               //   rules: {
                //    username: [
               //         {required: true, message: '请输入用户名', trigger: 'blur'},
               //         {min: 3, max: 10, message: "长度在3到10个字符", trigger: "blur"},
                //    ],
               //     password: [
                //        {required: true, message: '请输入密码', trigger: 'blur'},
                 //       {min: 1, max: 20, message: '长度在 6 到 11 个字符', trigger: 'blur'}
                //    ],
               // },
            }
        },
        computed: {
        },
        watch: {
        },
        beforeCreate() {
        },
        created() {
        },
        beforeMount() {
        },
        mounted() {
        },
        updated() {
        },
        activated() {
        },
        deactivated() {
        },
        beforeDestroy() {
        },
        destroyed() {
        },
        methods: {
        },
    });
</script>

<style scoped>

    html {
        height: 100%;
    }

    body {
        height: 100%;
    }

  .container {
    /* margin-top: 5%; */
    /* margin-top: 5%; */
    width: 620px;
    height: 800px;
    position: relative;
    top: 70px;
    right: -130px;
    bottom: 50px;
    left: -800px;
    background: #abc1ee;
    background-image: linear-gradient(to right, #00ff90, #a6c1ee);
    /* width: 720px;
    height: 900px;
    position: relative;
    top: 110px;
    right: -130px;
    bottom: 20px;
    left: -800px;
    background: #abc1ee;
    background-image: linear-gradient(to right, #00ff90, #a6c1ee);
*/
  }

  .login-wrapper {
    background-color: #b6ff00;
    width: 560px;
    height: 760px;
    border-radius: 15px;
    padding: 0 50px;
    position: relative;
    top: 400px;
    right: 600px;
    bottom: 10px;
    left: 310px;
    transform: translate(-50%, -50%);
  }

    .header {
        font-size: 38px;
        font-weight: bold;
        text-align: center;
        line-height: 200px;
    }

    .input-item {
        display: block;
        width: 100%;
        margin-bottom: 20px;
        border: 0;
        padding: 10px;
        border-bottom: 1px solid rgb(128, 125, 125);
        font-size: 15px;
        outline: none;
    }

        .input-item::placeholder {
            text-transform: uppercase;
        }

    .btn {
        text-align: center;
        padding: 10px;
        margin: 20px auto;
        border-radius: 15px;
        width:100%;
       background-image: linear-gradient(to right, #a6c1ee, #fbc2eb);
        color: #fff;

    }
    .btn:hover {
        background-color: rgb(180,193,237);
    }
    .btn:active {
        position: relative;
        top: 5px;
    }
    .msg {
        text-align: center;
        line-height: 88px;
    }

    a {
        text-decoration-line: none;
        color: #abc1ee;
    }
</style>

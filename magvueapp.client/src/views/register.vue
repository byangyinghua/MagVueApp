<template>    
        <div class="container">
            <div class="register-wrapper">
                <div class="header">注册</div>
                <el-form :model="registerForm" ref="registerFormRef" :rules="registerFormRules" label-width="100px" class="register_form">
                    <el-form-item prop="accasess">
                        <el-input v-model="registerForm.accasess" prefix-icon="el-icon-user-solid"></el-input>
                    </el-form-item>

                    <el-form-item prop="password">
                        <el-input v-model="registerForm. password" show-password="true" prefix-icon="el-icon-lock"></el-input>
                    </el-form-item>

                    <el-form-item prop="repassword">
                        <el-input v-model="registerForm.repassword" show-repassword="true" prefix-icon="el-icon-lock"></el-input>
                    </el-form-item>

                    <el-form-item class="btns">
                        <el-button type="primary" style="width: 100%" @click="registe" round>注册</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    
</template>

<script lang="ts">
    import { defineComponent } from 'vue';

    export default defineComponent({

        components: {  
            
        },
        directives: {
        },
        filters: {
        },
        props: {
        },
        data() {
            return {
                registerForm:{
                        accasess: 'wwww4',
                        password:  '214214',
                        repassword: '214214',
                },
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

    .register-wrapper {
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

        .input-item:placeholder-shown {
            text-transform: uppercase;
        }

    .btn {
        text-align: center;
        padding: 10px;
        width: 100%;
        margin-top: 40px;
        background-image: linear-gradient(to right, #a6c1ee, #fbc2eb);
        border-radius: 15px;
        color: #fff;
        margin: 0 auto;
    }
    .btn:hover {
        background-color: rgb(180,193,237);
    }

    .btn:active {
        position: relative;
        top: 1px;
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

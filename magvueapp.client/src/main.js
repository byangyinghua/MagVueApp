import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

//import router from './router'
import ElementPlus from 'element-plus'
import 'element-Plus/theme-chalk/index.css';
//import router from './router/index.js'
//import axios from 'axios'

const app = createApp(App)
app.use(ElementPlus)
app.mount("#app")

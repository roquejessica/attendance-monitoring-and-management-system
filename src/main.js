import '@/assets/style.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia' //state management

import App from './App.vue'
import router from './router'

const app = createApp(App) //creating variable app and gi inside ang App parameter. createApp from vue package

app.use(createPinia()) //register create Pinia pack
app.use(router) //routes is plugin on index registered router. Used for create app

app.mount('#app') //mount is a method, #app finding index.html, mount plugins to index.html

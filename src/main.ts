import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'

import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.css'
import { BootstrapIconsPlugin } from 'bootstrap-icons-vue';


const app = createApp(App)
app.use(createPinia())
app.mount('#app')
app.use(BootstrapIconsPlugin);


import 'bootstrap/dist/js/bootstrap.js'

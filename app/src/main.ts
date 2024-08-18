import * as Vue from 'vue'

// vue-router
import router from './router'

// prime icons
import 'primeicons/primeicons.css'

// global css
import './app.css'
import './tailwindcss.css'

// Root component
import App from './App.vue'

// Create app
const app = Vue.createApp(App)

// router setup
app.use(router)

// mount
app.mount('#app')

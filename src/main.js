import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Navbar from '@/components/Navbar.vue'
import './assets/tailwind.css'

createApp(App).use(router).component('navbar', Navbar).mount('#app')

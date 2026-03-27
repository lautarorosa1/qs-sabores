import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import './assets/style.css'

// Components
import Header from './components/header.vue'
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import MenuSection from './components/MenuSection.vue'
import Gallery from './components/Gallery.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'

// Routes
const routes = [
  { path: '/', name: 'Home', component: App }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

const app = createApp(App)

app.use(router)
app.component('HeaderComp', Header)
app.component('HeroComp', Hero)
app.component('AboutComp', About)
app.component('MenuSectionComp', MenuSection)
app.component('GalleryComp', Gallery)
app.component('ContactComp', Contact)
app.component('FooterComp', Footer)

app.mount('#app')
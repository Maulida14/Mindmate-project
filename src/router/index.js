import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '../pages/LandingPage.vue'
import Home from '../pages/Home.vue'
import AboutUs from '../pages/AboutUs.vue'
import MoodJurnal from '../pages/MoodJurnal.vue'
import Article from '../pages/Article.vue'
import Contact from '../pages/Contact.vue'
import Login from '../pages/Login.vue'

const routes = [
  { path: '/', component: LandingPage },
  { path: '/home', component: Home },
  { path: '/contact', component: Contact },
  { path: '/about', component: AboutUs },
  { path: '/features/mood-journal', component: MoodJurnal },
  { path: '/articles', component: Article },
  { path: '/login', component: Login },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
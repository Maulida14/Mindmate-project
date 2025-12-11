import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '../pages/LandingPage.vue'
import Home from '../pages/Home.vue'
import AboutUs from '../pages/AboutUs.vue'
import MoodJurnal from '../pages/MoodJurnal.vue'
import Article from '../pages/Article.vue'
import Contact from '../pages/Contact.vue'
import Login from '../pages/Login.vue'
import MoodTracker from '../pages/MoodTracker.vue'
import SelfReflection from '../pages/SelfReflection.vue'
import PositiveQuotes from '../pages/PositiveQuotes.vue'
import Faq from '../pages/Faq.vue'
import PrivacyPolicy from '../pages/PrivacyPolicy.vue'
import TermCondition from '../pages/TermCondition.vue'
import Dashboard from '../pages/Dashboard.vue'
import AboutMe from '../pages/AboutMe.vue'

const routes = [
  { path: '/', component: LandingPage, meta: { hideFooter: true }},
  { path: '/home', component: Home },
  { path: '/contact', component: Contact },
  { path: '/about', component: AboutUs },
  { path: '/features/mood-journal', component: MoodJurnal, meta: { requiresAuth: true }},
  { path: '/features/mood-tracker', component: MoodTracker, meta: { requiresAuth: true }},
  { path: '/features/self-reflection', component: SelfReflection, meta:{ requiresAuth: true }},
  { path: '/features/positive-quotes', component: PositiveQuotes},
  { path: '/articles', component: Article },
  { path: '/login', component: Login },
  { path: '/faq', component: Faq},
  { path: '/privacy-policy', component: PrivacyPolicy},
  { path: '/terms', component: TermCondition},
  { path: '/dashboard', component: Dashboard, meta: { hideFooter: true }},
  { path: '/aboutme', component: AboutMe }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition){
      return savedPosition;
    }
    else {
      return {top:0};
    }
  }
})

router.beforeEach((to, from, next) => {
  // 1. Ambil data user dari localStorage
  const userData = localStorage.getItem("user");
  const isAuthenticated = userData ? true : false;

  // 2. Cek apakah halaman tujuan butuh login (requiresAuth)
  if (to.meta.requiresAuth) {
    if (!isAuthenticated) {
      alert("Eits, kamu harus login dulu untuk mengakses fitur ini! 🔒");
      next('/login');
    } else {
      next();
    }
  } else {
    next();
  }
});
export default router
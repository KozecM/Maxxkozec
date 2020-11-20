import Vue from 'vue';
import Router from 'vue-router';
import Dashboard from '../components/Dashboard.vue'
import Projects from '../components/Projects.vue'
import Contact from '../components/Contact.vue'


Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/Projets',
    name: 'Projects',
    component: Projects
  },
  {
    path: '/Contact',
    name: 'Contact',
    component: Contact
  }
]
});

export default router
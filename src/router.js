import Vue from 'vue';
import Router from 'vue-router';
import Home from './pages/home/index.vue';
import About from './pages/about/index.vue';
import Contact from './pages/contact/index.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: '/',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact,
    },
    {
      path: '*',
      component: Home,
    }
  ]
});

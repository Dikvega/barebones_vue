import Vue from 'vue';
import Main from './components/Main.vue';
import router from './router';

new Vue({
  render: (createEl) => createEl(Main),
  router: router
}).$mount('#app');

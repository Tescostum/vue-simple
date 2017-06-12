import Vue from 'vue';
import router from './router/index.js';

import appView from './app.vue';

var app = new Vue({
  el: '#app',
  router: router,
  render: h => h(appView)
});
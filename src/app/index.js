import Vue from 'vue';
import appView from './app.vue';
import app2View from './app2.vue';

var app = new Vue({
  el: '#app',
  render: h => h(appView)
});

var app2 = new Vue({
  el: '#app2',
  render: h => h(app2View)
});
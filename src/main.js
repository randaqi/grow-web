import Vue from 'vue';
import App from './App.vue';
import ElementUI from 'element-ui';
import './plugins/element.js';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

new Vue({
  el: '#app',
  render: h => h(App),
});

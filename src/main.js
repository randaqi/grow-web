import Vue from 'vue';
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

import App from './App.vue';

Vue.config.productionTip = false;
Vue.use(Antd);

Vue.use(Mint);

new Vue({
  render: h => h(App),
}).$mount('#app');

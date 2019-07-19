import Vue from 'vue';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import moment from 'moment';
import lodash from 'lodash';
import router from './router';

import App from './App.vue';

Vue.config.productionTip = false;
Vue.use(Antd);
Vue.prototype.$moment = moment;
Vue.prototype._ = lodash;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');

import Vue from 'vue';
import Router from 'vue-router';
import home from '../goal/index.vue';
import goalAdd from '../goal/goalAdd.vue';
import goalList from '../goal/goalList.vue';
import goalEdit from '../goal/goalEdit.vue';
import goalView from '../goal/goalView.vue';
import weeklyPlan from '../weeklyPlan/index.vue';
import myCenter from '../myCenter/index.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
    }, {
      path: '/goalAdd',
      name: 'goalAdd',
      component: goalAdd,
    }, {
      path: '/goalList',
      name: 'goalList',
      component: goalList,
    }, {
      path: '/goalEdit',
      name: 'goalEdit',
      component: goalEdit,
    }, {
      path: '/goalView',
      name: 'goalView',
      component: goalView,
    }, {
      path: '/weeklyPlan',
      name: 'weeklyPlan',
      component: weeklyPlan,
    },
    {
      path: '/myCenter',
      name: 'myCenter',
      component: myCenter,
    },
  ],
});

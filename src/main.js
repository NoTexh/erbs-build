import { Row, Column } from 'vue-grid-responsive';
import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import PlanningTool from './components/PlanningTool'
import WeaponSelect from './components/WeaponSelect'

Vue.config.productionTip = false
Vue.component('row', Row);
Vue.component('column', Column);
Vue.use(VueRouter);

const routes = [
  { path: '/', component: WeaponSelect },
  { path: '/planning/:weaponName', component: PlanningTool }
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
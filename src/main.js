import Vue from 'vue';
import App from './App.vue';
import { Row, Column } from 'vue-grid-responsive';

Vue.config.productionTip = false
Vue.component('row', Row);
Vue.component('column', Column);

new Vue({
  render: h => h(App),
}).$mount('#app')
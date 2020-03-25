// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuex from 'vuex';
import App from './App';
import router from './router';

import "bootstrap";
import axios from 'axios';
import VueAxios from 'vue-axios';
import zh_TW from "vee-validate/dist/locale/zh_TW";
import { ValidationObserver, ValidationProvider, extend, localize} from 'vee-validate';
import * as rules from 'vee-validate/dist/rules';

import store from "./store";
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import Currency from './filters/currency';


localize('zh_TW',zh_TW);
Object.keys(rules).forEach((rule) => {
  extend(rule, rules[rule]);
});

Vue.component('ValidationObserver', ValidationObserver);
Vue.component('ValidationProvider', ValidationProvider);

Vue.use(VueAxios, axios);
Vue.use(Vuex);
Vue.component('Loading', Loading);
Vue.filter('currency' , Currency);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store,
})

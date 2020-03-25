import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import VueAxios from 'vue-axios';
import cartsModules from './carts';
import productsModules from './getProducts';
import DetailModules from './productDetail';
import OrderModules from './order';
import alertModules from './alert';

Vue.use(VueAxios, axios);

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        isLoading: false,
    },
    actions: {
        isLoading(context,payload){
            context.commit('LOADING',payload);
        }
    },
    mutations: {
        LOADING(state, payload) {
            state.isLoading = payload;
        },
    },
    getters: {
        isLoading: (state) => state.isLoading,
    },
    modules:{
        cartsModules,
        productsModules,
        DetailModules,
        OrderModules,
        alertModules,
    }
});
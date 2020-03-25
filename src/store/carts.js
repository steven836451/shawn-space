import axios from 'axios';
import router from '../router';

export default {
    namespaced: true,
    state: {
        carts: {},
        cartsLength: '',
        coupon_code: ''
    },
    actions: {
        getCarts(context) {
            const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart`;
            context.commit('LOADING', true, { root: true });
            axios.get(api).then((response) => {
                console.log("購物車資訊:", response.data.data);
                context.commit('GETCARTS', response.data.data);
                context.commit('LOADING', false, { root: true });
            });
        },
        addCouponCode(context, payload) {
            const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/coupon`;
            context.commit('LOADING', true, { root: true });
            axios.post(api, { data: { code: payload } }).then((response) => {
                context.dispatch('getCarts');
                context.dispatch('alertModules/updateMessage', {
                    message: response.data.message,
                    status: response.data.success ?
                        "success" : "danger"
                }, { root: true })
                context.commit('LOADING', false, { root: true });
            });
        },
        addToCart(context, payload) {
            const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart`;
            context.commit('LOADING', true, { root: true });
            axios.post(api, { data: payload }).then((response) => {
                context.dispatch('getCarts');
                context.dispatch('alertModules/updateMessage', {
                    message: response.data.message,
                    status: response.data.success ?
                        "success" : "danger"
                }, { root: true })
                context.commit('LOADING', false, { root: true });
            });
        },
        deleteCart(context, payload) {
            const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart/${payload}`;
            context.commit('LOADING', true, { root: true });
            axios.delete(api).then((response) => {
                context.dispatch('getCarts');
                context.dispatch('alertModules/updateMessage', {
                    message: response.data.message,
                    status: response.data.success ?
                        "success" : "danger"
                }, { root: true })
                context.commit('LOADING', false, { root: true });
            });
        },
        createOrder({ commit,dispatch }, payload) {
            const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/order`;
            commit('LOADING', true, { root: true });
            axios.post(api, { data: payload }).then((response) => {
                console.log(response.data)
                if (response.data.success) {
                    router.push(`/order/${response.data.orderId}`);
                }
                dispatch('alertModules/updateMessage', {
                    message: response.data.message,
                    status: response.data.success ?
                        "success" : "danger"
                }, { root: true })
                commit('LOADING', false, { root: true });
            });
        }
    },
    mutations: {
        GETCARTS(state, payload) {
            state.carts = payload;
            state.cartsLength = payload.carts.length;
        },
    },
    getters: {
        carts: (state) => state.carts,
        cartsLength: (state) => state.cartsLength,
    }

}
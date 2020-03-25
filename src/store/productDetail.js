import axios from 'axios';

export default{
    namespaced: true,
    state:{
        detail:{},
    },
    actions:{
        getProduct(context,payload,){
            const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/product/${payload}`;
            context.commit('LOADING', true, { root: true });
            axios.get(api).then((response) => {
                // console.log(response.data.product);
                context.commit('DETAIL', response.data.product);
                context.commit('LOADING', false, { root: true });
            });
        },
    },
    mutations:{
        DETAIL(state,status){
            state.detail = status;
        }
    },
    getters:{
        detail:(state) => state.detail,
    }
}
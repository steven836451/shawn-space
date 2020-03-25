import axios from 'axios';


export default ({
    namespaced: true,
    state: {
        order:{
            user:{}
        }
    },
    actions: {
        getOrder({commit},id) {
            console.log(id)
            const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/order/${id}`;
            commit('LOADING', true, { root: true });
            axios.get(api).then(response => {
                console.log(response);
                commit('ORDER', response.data.order)
                commit('LOADING', false, { root: true });
            });
        },
        payOrder(context,id) {
            const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/pay/${id}`;
            context.commit('LOADING', true, { root: true });
            axios.post(api).then(response => {
              if (response.data.success) {
                context.dispatch('getOrder', id)
              }
              context.dispatch('alertModules/updateMessage', {
                message: response.data.message,
                status: response.data.success ?
                    "success" : "danger"
            }, { root: true })
              context.commit('LOADING', false, { root: true });
            });
          }
    },
    mutations: {
        ORDER(state, payload){
            state.order = payload;
        }
    },
    getters: {
        order: (state) => state.order,
    },
})
import axios from 'axios';


export default {
    namespaced: true,
    state: {
        products: [],
        pagination: {},
        categories: [],
        pageLimit: '6',
        searchText: '',
    },
    actions: {
        getProducts(context) {
            const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/products/all`;
            context.commit('LOADING', true, { root: true });
            axios.get(api).then((response) => {
                console.log('產品清單:', response.data.products);
                context.commit('PRODUCTS', response.data.products);
                context.commit('PAGINATION', response.data.pagination);
                context.commit('CATEGORIES', response.data.products);
                window.scroll(0, 0);
                context.commit('LOADING', false, { root: true });
            });
        },
        searchText({ commit }, text) {
            commit('SEARCH', text);
        }
    },
    mutations: {
        PRODUCTS(state, payload) {
            state.products = payload;
        },
        PAGINATION(state, payload) {
            state.pagination = payload;
        },
        CATEGORIES(state, payload) {
            const categories = new Set();
            payload.map((item) => {
                categories.add(item.category);
            });
            state.categories = Array.from(categories);
        },
        SEARCH(state, payload) {
            state.searchText = payload;
        }
    },
    getters: {
        products: (state) => state.products,
        enableProducts: (state) => state.products.filter((item) => item.is_enabled === 1).reverse(),
        saleProducts: (state, getters) => getters.enableProducts.filter((item) => item.origin_price),
        searchProducts: (state, getters) => getters.enableProducts.filter(({ title }) =>
            title.includes(state.searchText)
        ),
        pagination: (state) => state.pagination,
        categories: (state) => state.categories.reverse(),
        filtered: (state) => state.filtered,
    }
}
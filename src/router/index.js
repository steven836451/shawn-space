import Vue from 'vue';
import Router from 'vue-router';

import App from "@/App";
import Home from '@/components/Home';
import AboutUs from '../components/pages/AboutUs';
import ProductsFilter from '../components/pages/ProductsFilter';
import ProductDetail from '../components/pages/ProductDetail';
import Carts from '../components/pages/Carts';
import Shopping from '../components/pages/Shopping';
import Order from "../components/pages/OrderCheckout";


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home,
    },
    {
      path:'/about_us',
      name:'aboutUs',
      component: AboutUs
    },
    {
      path:'/carts',
      name:'Carts',
      component: Carts
    },
    {
      path:'/order/:id',
      name:'Order',
      component: Order
    },
    {
      path:'/shopping',
      name:'Shopping',
      component: Shopping,
      children:[
        {
          path:':filter',
          name:'ProductsFilter',
          component: ProductsFilter,
        },
        {
          path:'productDetail/:id',
          name:'ProductDetail',
          component: ProductDetail,
        },
      ]
    },
    {
      path:"*",
      redirect:"Home"
    }

  ],
});

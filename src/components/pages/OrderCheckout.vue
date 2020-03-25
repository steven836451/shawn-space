<template>
<div class="container">
  <loading :active.sync="isLoading"></loading>
  <div class="my-4 row justify-content-center">
    <form class="col-md-6" @submit.prevent="payOrder">
      <div class="cartListTitle">購物清單</div>
      <table class="table">
        <thead>
          <th width="70%">品名</th>
          <th width="15%">數量</th>
          <th width="15%">單價</th>
        </thead>
        <tbody>
          <tr v-for="item in order.products" :key="item.id">
            <td class="align-middle">{{ item.product.title }}</td>
            <td class="align-middle">{{ item.qty }}/{{ item.product.unit }}</td>
            <td class="align-middle text-right">{{ item.final_total | currency}}</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colspan="2" class="text-right">總計</td>
            <td class="text-right">{{ order.total | currency}}</td>
          </tr>
        </tfoot>
      </table>

      <table class="table">
        <tbody>
          <tr>
            <th width="100">Email</th>
            <td>{{ order.user.email }}</td>
          </tr>
          <tr>
            <th>姓名</th>
            <td>{{ order.user.name }}</td>
          </tr>
          <tr>
            <th>收件人電話</th>
            <td>{{ order.user.tel }}</td>
          </tr>
          <tr>
            <th>收件人地址</th>
            <td>{{ order.user.address }}</td>
          </tr>
          <tr>
            <th>付款狀態</th>
            <td>
              <span v-if="!order.is_paid">尚未付款</span>
              <span v-else class="text-success">付款完成</span>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="text-right " v-if="!order.is_paid">
        <button>確認付款去</button>
      </div>
      <div class="text-center" v-if="order.is_paid">
        <button>
          <router-link to="/shopping/all?page=1">逛逛商場去</router-link>
        </button>
      </div>
    </form>
  </div>
  </div>
</template>


<script>
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      orderId: ""
    };
  },
  methods: {
    getOrder() {
      this.$store.dispatch("OrderModules/getOrder", this.orderId);
    },
    payOrder() {
      this.$store.dispatch("OrderModules/payOrder", this.orderId);
    }
  },
  computed: {
    ...mapGetters("OrderModules", ["order"]),
    ...mapGetters(["isLoading"]),
  },
  created() {
    this.orderId = this.$route.params.id;
    this.getOrder();
  }
};
</script>

<style lang="scss" scoped>

button {
  position: inline-block;
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  color: #fff;
  background-color: #94482c;
  font-size: 24px;
  &:hover {
    background-color: #c45e3a;
    transition: 0.15s ease-in-out;
  }
  a {
    color: #fff;
    &:hover{
      text-decoration: none;
    }
  }
}
.cartListTitle {
  padding: 10px;
  text-align: center;
  background-color: #d6d6d6;
  margin-bottom: 20px;
  color: #fff;
  font-size: 24px;
}
</style>
<template>
  <div class="container">
    <loading :active.sync="isLoading"></loading>
    <div class="cartBox" v-if="carts.total ">
      <cartItemBox class="cartItem" :carts="carts.carts" v-if="status==0"></cartItemBox>
      <userInfo class="cartItem" v-else></userInfo>
      <div class="cartInfo">
        <div class="cartInfoTitle">訂單摘要</div>
        <hr />
        <div class="d-flex justify-content-between text-white">
          <div>小計</div>
          <div>{{carts.total | currency}}</div>
        </div>
        <div
          class="d-flex justify-content-between text-success"
          v-if="carts.total!==carts.final_total"
        >
          <div>折扣價</div>
          <div>{{carts.final_total | currency}}</div>
        </div>
        <div class="d-flex justify-content-between text-white">
          <div>運費</div>
          <div>{{150 | currency}}</div>
        </div>
        <div class="d-flex justify-content-between text-white">
          <div>總計</div>
          <div>{{carts.final_total + 150 | currency}}</div>
        </div>
        <div class="couponInput" v-if="status==0">
          <input type="text" v-model="coupon_code" placeholder="輸入優惠碼" />
          <button @click="addCouponCode">套用優惠碼</button>
        </div>
        <div>
          <button class="createOrder" v-if="status==0" @click="status=1">建立訂單</button>
          <button class="createOrder" v-else @click="status=0" >取消</button>
        </div>
      </div>
    </div>
    <div class="blank" v-else>
      <div>
        <div class="h3">購物車內無商品</div>
        <div>
          <router-link class="btn btn-brown" to="/shopping/all?page=1">前往逛逛商城</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapState } from "vuex";
import cartItemBox from "../CartItemBox";
import userInfo from "../UserInfo";

export default {
  components: {
    cartItemBox,
    userInfo
  },
  data() {
    return {
      coupon_code: "",
      status:''
    };
  },
  methods: {
    ...mapActions("cartsModules", ["getCarts"]),
    addCouponCode() {
      this.$store.dispatch("cartsModules/addCouponCode", this.coupon_code);
      this.coupon_code = "";
    }
  },
  computed: {
    ...mapGetters("cartsModules", ["carts"]),
    ...mapGetters(["isLoading"])
  },
  created() {
    this.status = 0;
    this.getCarts();
    scrollTo(0, 0);
  }
};
</script>

<style lang="scss" scoped>
.cartBox {
  display: flex;
  margin: 20px 0;
  align-items: flex-start;
  .cartItem {
    width: 100%;
    flex: 7;
    padding: 0 20px;
  }
  .cartInfo {
    flex: 3;
    width: 100%;
    padding: 10px;
    position: relative;
    background-color: #d6d6d6;
    .createOrder {
      height: 50px;
      position: absolute;
      width: 100%;
      left: 0;
      bottom: -50px;
      background-color: #94482c;
      color: #fff;
      border: none;
      font-size: 24px;
      &:hover {
        background-color: #c45e3a;
        transition: 0.15s ease-in-out;
      }
      &:focus{
        outline: none;
      }
    }
    div + div {
      margin: 5px;
    }
  }
}
.cartInfoTitle {
  text-align: center;
  font-size: 24px;
  color: #fff;
}
.couponInput {
  position: relative;
  input {
    width: 100%;
    border: 2px solid #adb5bd;
    height: 36px;
    padding: 0 10px;
    &:focus{
      outline: none;
    }
  }
  button {
    position: absolute;
    width: 30%;
    background-color: #adb5bd;
    border: none;
    right: 0;
    top: 0;
    height: 36px;
    border-radius: 0 0.3rem 0.3rem 0;
    font-size: 15px;
  }
}
.blank {
  width: 100%;
  height: 300px;
  margin: 20px 0;
  text-align: center;
  border-radius: 0.5rem;
  padding-top: 90px;
  a {
    color: #fff;
    margin: 20px;
    padding: 10px 20px;
  }
}

@media (max-width: 996px) {
  .cartBox {
    flex-direction: column;
    margin-bottom: 70px;
  }
}
</style>
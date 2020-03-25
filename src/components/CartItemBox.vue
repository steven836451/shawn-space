<template>
  <div>
    <div class="cartListTitle">購物清單</div>
    <div v-for="item in carts" :key="item.id">
      <div class="singleItemBox">
        <img :src="item.product.imageUrl" alt />

        <div class="rwdSetup">
          <div class="singleItemName">
            <div>{{item.product.EngTitle}}</div>
            <div>{{item.product.ChTitle}}</div>
            <div class="text-success" v-if="item.coupon">已套用優惠券</div>
          </div>
          <div class="singleItemSize">尺寸:({{item.size}})</div>
          <div class="singleItemQty">{{item.qty}}/{{item.product.unit}}</div>
          <div class="singleItemPrice">{{item.total | currency}}</div>
        </div>
        <button type="button" class="btn btn-outline-danger btn-sm" @click="deleteCart(item.id)">
          <i class="fas fa-trash-alt"></i>
        </button>
      </div>
      <hr />
    </div>
  </div>
</template>

<script>
import mapActions from "vuex";

export default {
  props: ["carts"],
  methods: {
    deleteCart(id) {
      this.$store.dispatch("cartsModules/deleteCart", id);
    }
  },
  created() {
    scrollTo(0,0);
  },
};
</script>

<style lang="scss" scoped>
img {
  width: 150px;
  height: auto;
}
.cartListTitle {
  padding: 10px;
  text-align: center;
  background-color: #d6d6d6;
  margin-bottom: 20px;
  color: #fff;
  font-size: 24px;
}
.singleItemBox {
  display: flex;
  align-items: center;
  justify-content: space-between;
  .rwdSetup {
    margin: 0 20px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}

@media (max-width: 996px) {
  .singleItemBox {
    .rwdSetup {
      flex-direction: column;
      text-align: center;
      line-height: 30px;
    }
  }
  .cartBox {
    .cartItem {
      padding: 0;
    }
  }
}
</style>
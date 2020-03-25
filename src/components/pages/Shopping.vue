<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <div class="container">
      <div class="box">
        <Sidebar class="list"></Sidebar>
        <router-view class="products"></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Sidebar from "../Sidebar";

export default {
  components: {
    Sidebar
  },
  methods: {
    ...mapActions("productsModules", ["getProducts"]),
    productDetail(id) {
      this.$store.dispatch("productsModules/productDetail", id);
    }
  },
  computed: {
    ...mapGetters(["isLoading"]),
  },
  created() {
    this.getProducts();
  }
};
</script>

<style lang="scss" scoped>
.box {
  display: flex;
  margin:20px;
}
.list {
  flex: 2;
}
.products {
  display: flex;
  flex: 8;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: flex-start;
}

@media (max-width: 996px) {
  .box {
    flex-direction: column;
  }
}
</style>
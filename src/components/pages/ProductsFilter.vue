<template>
  <div>
    <div
      class="product"
      v-for="item in renderPageProducts"
      :key="item.id"
      @click="productDetail(item.id)"
    >
      <div class="card" style="width: 18rem;">
        <img :src="item.imageUrl" class="card-img-top" alt />
        <div class="card-body">
          <h5 class="card-title">{{item.title}}</h5>
          <h5
            class="card-text text-right discount text-sale"
            v-if="item.origin_price"
          >Sale {{item.price | currency}}</h5>
          <h5 class="card-text text-right" v-else>{{item.price | currency}}</h5>
        </div>
      </div>
    </div>
    <div class="blank" v-if="productsFilter==''">
      <h3>目前暫無資料</h3>
      <div>
        <router-link class="btn btn-brown" to="/shopping/all?page=1">返回全部商品</router-link>
      </div>
    </div>
    <Page
      class="pagination"
      :page-data="renderPage"
      :current-page="currentPage"
      v-if="renderPage > 1"
    ></Page>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapState } from "vuex";
import Page from "../page";

export default {
  components: {
    Page
  },
  data() {
    return {};
  },
  methods: {
    ...mapActions("productsModules", ["getProducts"]),
    productDetail(id) {
      this.$router.push(`productDetail/${id}`);
      scrollTo(0, 0);
    }
  },
  computed: {
    ...mapState("productsModules", ["pageLimit"]),
    ...mapGetters("productsModules", [
      "saleProducts",
      "pagination",
      "enableProducts",
      "searchProducts"
    ]),
    productsFilter() {
      switch (this.$route.params.filter) {
        case "all":
          return this.enableProducts;
          break;
        case "sale":
          return this.saleProducts;
          break;
        case "search":
          return this.searchProducts;
          break;
      }
      return this.enableProducts.filter(
        item => item.category == this.$route.query.type
      );
    },
    currentPage() {
      return Number(this.$route.query.page);
    },
    renderPage() {
      return Math.ceil(this.productsFilter.length / 6);
    },
    renderPageProducts() {
      scrollTo(0, 0);
      return this.productsFilter.filter(
        (item, index) =>
          index >= (this.currentPage - 1) * this.pageLimit &&
          index <= this.currentPage * this.pageLimit - 1
      );
    }
  },
  created() {}
};
</script>

<style lang="scss" scoped>
.product {
  margin-bottom: 20px;
  height: auto;
  :hover {
    cursor: pointer;
  }
  img:hover {
    transform: scale(1.05);
    transition: 0.3s;
    box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.5);
  }
  .card {
    border: none;
  }
}
.pagination {
  width: 100%;
  justify-content: center;
}
.card-body {
  padding: 0.8em;
}
.blank {
  text-align: center;
  a {
    color: #fff;
    margin: 20px;
    padding: 10px 20px;
  }
  :hover {
    text-decoration: unset;
  }
}

@media (max-width: 996px) {
  .box {
    flex-direction: column;
  }
  .product {
    max-width: 100%;
  }
}
</style>
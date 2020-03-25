<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-white fixed-top box-shadow">
      <div class="container">
        <button
          class="navbar-toggler border-0 p-0"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <router-link class="navbar-brand" to="/">Shawn space</router-link>

        <router-link class="cart" to="/carts">
          <i class="fas fa-shopping-cart fa-lg"></i>
          <span class="cartsLength" v-if="cartsLength">{{cartsLength}}</span>
        </router-link>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <router-link class="nav-link" :class="isActive('home')" to="/home">
                首頁
                <span class="sr-only">(current)</span>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :class="isActive('about_us')" to="/about_us">關於我們</router-link>
            </li>
            <li class="nav-item">
              <router-link
                class="nav-link"
                :class="isActive('shopping')"
                to="/shopping/all?page=1"
              >購物商城</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  data() {
    return {};
  },
  methods: {
    ...mapActions("cartsModules", ["getCarts"]),
    isActive(path) {
      return {
        "text-brown": path == this.currentPage,
        "text-secondary": path !== this.currentPage
      };
    }
  },
  computed: {
    ...mapState("cartsModules", ["cartsLength"]),
    currentPage() {
      return this.$route.path.split("/")[1];
    }
  },
  created() {
    this.getCarts();
  }
};
</script>


<style lang="scss" scope>
.container {
  position: relative;
}
body {
  padding-top: 70px;
}
.box-shadow {
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
}
.cart {
  color: silver;
  position: relative;
  order: 5;
  &:hover {
    color: #000;
  }
  .cartsLength {
    width: 20px;
    height: 20px;
    color: #fff;
    position: absolute;
    background-color: red;
    border-radius: 50%;
    border: 1px solid #fff;
    text-align: center;
    line-height: 18px;
    top: -10px;
    right: -15px;
    &:hover {
      transform: unset;
    }
  }
}

@media (max-width: 992px) {
  .cart {
    order: initial;
  }
}
</style>

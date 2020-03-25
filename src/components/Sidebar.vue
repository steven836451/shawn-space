<template>
  <div>
    <div class="sidebar">
      <div class="search">
        <input type="text" v-model.trim="searchText" placeholder="關鍵字搜尋" />
        <button type="submit" @click="searchProducts">
          <i class="fas fa-search"></i>
        </button>
      </div>
      <ul class="list-group mt-4 categoriesList">
        <li class="list-group-item list-group-item-action" @click="show=false">
          <router-link class="nav-link" to="/shopping/all?page=1">全部商品</router-link>
        </li>
        <li class="list-group-item list-group-item-action" @click="show=false">
          <router-link class="nav-link" to="/shopping/sale?page=1">限時特價</router-link>
        </li>
        <li class="list-group-item">類別</li>
      </ul>
      <div class="typeList">
        <ul class="list-group categories">
          <li class="list-group-item list-group-item-action" v-for="item in categories" :key="item">
            <router-link
              class="nav-link"
              :to="{path: '/shopping/type', query: {page:1,type:item}}"
            >{{item}}</router-link>
          </li>
        </ul>
      </div>
      <!-- 以下RWD -->
      <div class="smallScreen">
        <div>
          <router-link class="btn" to="/shopping/all?page=1">全部商品</router-link>
        </div>
        <div>
          <router-link class="btn" to="/shopping/sale?page=1">限時特價</router-link>
        </div>
        <div class="dropdown">
          <a
            class="btn dropdown-toggle"
            href="#"
            role="button"
            id="dropdownMenuLink"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >產品類別</a>

          <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <router-link
              class="dropdown-item"
              v-for="item in categories"
              :key="item"
              :to="{path: '/shopping/type', query: {page:1,type:item}}"
            >{{item}}</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations, mapState } from "vuex";

export default {
  data() {
    return {
      searchText: ""
    };
  },
  methods: {
    searchProducts() {
      this.$store.dispatch("productsModules/searchText", this.searchText);
      this.$router.push(`/shopping/search?page=1&search=${this.searchText}`);
      this.searchText = "";
    }
  },
  computed: {
    ...mapGetters("productsModules", ["categories"])
  }
};
</script>

<style lang="scss" scoped>
.search {
  position: relative;
  width: 100%;
  input {
    width: 100%;
    height: 32px;
    font-size: 20x;
    border: 2px solid #94482c;
    background-color: #fff;
    padding: 10px;
  }
  :focus {
    outline: none;
  }
  button {
    width: 36px;
    height: 32px;
    background-color: #94482c;
    color: #efe9e7;
    outline: none;
    border: 2px solid #94482c;
    position: absolute;
    top: 0;
    right: 0;
  }
}
.typeList {
  li {
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 30px;
    font-weight: 100;
  }
}
li {
  border: none;
  font-size: 18px;
}
.list-group-item {
  padding: 5px;
  margin: 0;
  text-align: left;
  a {
    padding: 0;
  }
}
.categoriesList a:hover {
  color: 94482c;
  cursor: pointer;
}
.router-link-exact-active {
  color: #94482c;
}
.categoriesList li {
  font-weight: bold;
}
.nav-link:hover {
  color: #c45e3a;
}
.smallScreen {
  display: none;
}

@media (max-width: 996px) {
  .sidebar {
    flex-direction: row;
  }
  .categoriesList {
    display: none;
  }
  .typeList {
    display: none;
  }
  .smallScreen {
    display: flex;
    justify-content: space-around;
    margin: 20px;
    .btn{
      font-weight: bold;
      &:focus{
        outline: none;
      }
    }
    div {
      position: relative;
    }
    div + div::before {
      content: "|";
      color: black;
      position: absolute;
      left: -15px;
      top: 5px;
    }
  }
}
</style>
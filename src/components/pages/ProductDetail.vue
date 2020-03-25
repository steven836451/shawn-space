<template>
  <div>
    <div class="pic">
      <img :src="detail.imageUrl" />
    </div>
    <div class="productIntroduce">
      <div>
        <h4>{{detail.EngTitle}}</h4>
        <h4>{{detail.ChTitle}}</h4>
      </div>
      <div v-if="!detail.origin_price">
        <h4>{{detail.price | currency}}</h4>
      </div>
      <div v-else>
        <del>{{detail.origin_price | currency}}</del>
        <h4 class="text-sale">Sale {{detail.price | currency}}</h4>
      </div>
      <hr />
      <div class="sizeBox">
        <form action>
          <div class="sizeSelect" v-if="detail.unit==='件'">
            Size:
            <div>
              <input name="size" id="sizeS" type="radio" value="S" v-model="size" required />
              <label for="sizeS">S</label>
            </div>
            <div>
              <input name="size" type="radio" id="sizeM" value="M" v-model="size" />
              <label for="sizeM">M</label>
            </div>
            <div>
              <input name="size" type="radio" id="sizeL" value="L" v-model="size" />
              <label for="sizeL">L</label>
            </div>
            <div>
              <input name="size" type="radio" id="sizeXL" value="XL" v-model="size" />
              <label for="sizeXL">XL</label>
            </div>
          </div>
          <div class="sizeGuide" v-if="detail.unit==='件'">
            <i class="fas fa-ruler-horizontal"></i>
            <a href data-toggle="modal" data-target="#exampleModal">Size Guide</a>
          </div>
          <div class="addToCartBtn">
            <div>
              <span>選購</span>
              <select v-model="qty">
                <option v-for="num in 10" :key="num">{{num}}</option>
              </select>
              <span>{{detail.unit}}</span>
            </div>
            <button type="button" class="btn" @click="addToCart(detail.unit)">加入購物車</button>
          </div>
        </form>
      </div>
      <div class="productDetail">
        <div>
          <h4>Product Introduce</h4>
          <p>{{detail.description}}</p>
        </div>
        <div>
          <h4>Product Material</h4>
          <pre>{{detail.content}}</pre>
        </div>
      </div>
    </div>

    <!-- modal -->
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Size Chart</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <table class="table table-striped">
              <thead>
                <tr>
                  <th scope="col">尺寸</th>
                  <th scope="col">胸圍(公分)</th>
                  <th scope="col">腰圍(公分)</th>
                  <th scope="col">臀圍(公分)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">S</th>
                  <td>86.5-91.5</td>
                  <td>74.5-79.5</td>
                  <td>88.5-93.5</td>
                </tr>
                <tr>
                  <th scope="row">M</th>
                  <td>91.5-97</td>
                  <td>79.5-85</td>
                  <td>88.5-93.5</td>
                </tr>
                <tr>
                  <th scope="row">L</th>
                  <td>97-103</td>
                  <td>85-91</td>
                  <td>98.5-103.5</td>
                </tr>
                <tr>
                  <th scope="row">XL</th>
                  <td>103-109</td>
                  <td>91-97</td>
                  <td>103.5-108.5</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      id: "",
      qty: "1",
      size: "NA"
    };
  },
  methods: {
    getProduct() {
      this.$store.dispatch("DetailModules/getProduct", this.id);
    },
    addToCart(unit) {
      if (this.size == 'NA' && unit == "件") {
        this.$store.dispatch('alertModules/updateMessage', {
          message:"請選擇尺寸",
          status:"danger"
        })
        return;
      }
      const data = {
        product_id: this.id,
        qty: this.qty,
        size: this.size
      };
      this.$store.dispatch("cartsModules/addToCart", data);
    }
  },
  computed: {
    ...mapGetters("DetailModules", ["detail"])
  },
  created() {
    this.id = this.$route.params.id;
    this.getProduct();
  }
};
</script>

<style lang="scss" scoped>
.pic {
  flex: 1;
  padding: 0 20px;
  img {
    width: 100%;
    height: auto;
  }
}
.productIntroduce {
  flex: 1;
  padding: 0 20px;
  width: 100%;
}
.sizeSelect {
  display: flex;
  margin-bottom: 10px;
  line-height: 35px;
  input {
    display: none;
    &:checked + label {
      border: 2px solid black;
      color: black;
      font-size: 24;
      font-weight: 600;
      line-height: 31px;
    }
  }
  label {
    border: 1px solid gray;
    border-radius: 50%;
    margin: 0 15px;
    width: 35px;
    height: 35px;
    line-height: 33px;
    text-align: center;
    color: gray;
  }
  div {
    :hover {
      cursor: pointer;
      opacity: 0.5;
    }
  }
}
.sizeBox {
  height: 200px;
  position: relative;
}
.addToCartBtn {
  position: absolute;
  display: flex;
  bottom: 0;
  line-height: 38px;
  .btn {
    margin-left: 20px;
    color: #fff;
    background-color: #cb56fc;
    &:hover {
      background-color: #e3a1ff;
    }
  }
  select {
    height: 38px;
  }
}
hr {
  width: 100%;
}
.productDetail {
  margin: 20px 0;
  h4 {
    padding: 10px 0;
    border-bottom: 1px solid #000;
  }
}
@media (max-width: 996px) {
  .products {
    flex-direction: column;
  }
  .pic {
    max-width: 100%;
    margin-bottom: 20px;
    padding: 0;
  }
  .addToCartBtn {
    margin-top: 10px;
    position: unset;
  }
  .sizeBox {
    height: auto;
  }
}
</style>
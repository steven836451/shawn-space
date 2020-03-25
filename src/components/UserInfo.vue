<template>
  <div>
    <div class="cartListTitle">收件人資訊</div>
    <div class="formBox">
      <ValidationObserver v-slot="{ handleSubmit }">
        <form @submit.prevent="handleSubmit(createOrder)">
          <div class="inputContent">
            <ValidationProvider name="Email欄位" rules="required|email" v-slot="{ errors }">
              <label for="useremail">Email</label>
              <input type="text" id="useremail" placeholder="請輸入Email" v-model="form.user.email" />
              <span class="text-danger">{{ errors[0] }}</span>
            </ValidationProvider>
          </div>
          <div class="inputContent">
            <ValidationProvider name="姓名欄位" rules="required" v-slot="{ errors }">
              <label for="name">收件人姓名</label>
              <input type="text" id="name" placeholder="請輸入姓名" v-model="form.user.name" />
              <span class="text-danger">{{ errors[0] }}</span>
            </ValidationProvider>
          </div>
          <div class="inputContent">
            <ValidationProvider name="電話欄位" rules="required|numeric" v-slot="{ errors }">
              <label for="tel">收件人電話</label>
              <input type="text" id="tel" placeholder="請輸入電話" v-model="form.user.tel" />
              <span class="text-danger">{{ errors[0] }}</span>
            </ValidationProvider>
          </div>
          <div class="inputContent">
            <ValidationProvider name="地址欄位" rules="required" v-slot="{ errors }">
              <label for="address">收件人地址</label>
              <input type="text" id="address" placeholder="請輸入地址" v-model="form.user.address" />
              <span class="text-danger">{{ errors[0] }}</span>
            </ValidationProvider>
          </div>
          <div class="inputContent">
            <label for="message">留言</label>
            <textarea id="message" cols="30" rows="5" v-model="form.message"></textarea>
          </div>
          <button type="submit">送出訂單</button>
        </form>
      </ValidationObserver>
    </div>
  </div>
</template>

<script>
import {mapActions,mapGetters} from 'vuex';

export default {
  data() {
    return {
      form: {
        user: {
          name: "",
          email: "",
          tel: "",
          address: ""
        },
        message: ""
      }
    };
  },
  methods: {
      createOrder(id){
          this.$store.dispatch('cartsModules/createOrder', this.form);
      }
  },
  created() {
    scrollTo(0, 0);
  }
};
</script>

<style lang="scss" scoped>
.cartListTitle {
  padding: 10px;
  text-align: center;
  background-color: #d6d6d6;
  margin-bottom: 20px;
  color: #fff;
  font-size: 24px;
}
.formBox {
  padding: 0 20px;
  text-align: center;
  margin-bottom: 20px;
}
.inputContent {
  //   width: 100%;
  margin: 10px;
  text-align: left;
  input {
    width: 100%;
    border-radius: 5px;
    border: 1px solid #adb5bd;
    padding: 5px 10px;
  }
  span {
    position: block;
    text-align: left;
  }
  textarea {
    padding: 5px 10px;
    width: 100%;
  }
}
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
}
@media (max-width: 996px) {
  .cartBox {
    .cartItem {
      padding: 0;
    }
  }
}
</style>
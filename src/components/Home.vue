<template>
  <div class="container">
    <carousel />
    <div class="box1">
      <div class="pic">
        <router-link to="/shopping/type?page=1&type=短T">
          <img
            src="https://img.guess.com/image/upload/f_auto,q_auto/v1/NA/Asset/North%20America/E-Commerce/Guess/Bug%20Number/4733/G_Site_Home_ContentCenter_MarWk2v2_4733_04"
            alt
          />
          <h3>New Tees</h3>
        </router-link>
      </div>
      <div class="pic">
        <router-link to="/shopping/type?page=1&type=手提包">
          <img
            src="https://img.guess.com/image/upload/f_auto,q_auto/v1/NA/Asset/North%20America/E-Commerce/Guess/Bug%20Number/4733/G_Site_Home_ContentCenter_MarWk2v2_4733_05"
            alt
          />
          <h3>Handbags</h3>
        </router-link>
      </div>
      <div class="pic">
        <router-link to="/shopping/type?page=1&type=洋裝">
          <img
            src="https://img.guess.com/image/upload/f_auto,q_auto/v1/NA/Asset/North%20America/E-Commerce/Guess/Bug%20Number/4733/G_Site_Home_ContentCenter_MarWk2v2_4733_06"
            alt
          />
          <h3>Dresses</h3>
        </router-link>
      </div>
    </div>
    <div class="jumbotron font-weight-bold">
      <h1 class="display-4">限時優惠</h1>
      <p
        class="lead font-weight-bold"
      >即日起來消費享有8折優惠</p>
      <hr class="my-4" width="50%"/>
      <p >輸入優惠券「shawnspace」</p>
      <!-- <a class="btn btn-primary btn-lg"  href="#" role="button">開始逛逛吧</a> -->
      <router-link class="btn btn-primary btn-lg font-weight-bold" to="/shopping/all?page=1">開始逛逛吧</router-link>
    </div>


  </div>
</template>

<script>
import carousel from "./carousel";
export default {
  name: "Home",
  data() {
    return {};
  },
  components: {
    carousel
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.box1 {
  display: flex;
  text-align: center;
  img {
    width: 100%;
    height: auto;
    &:hover {
      transform: none;
    }
  }
}
.pic {
  position: relative;
  a {
    color: #fff;
  }
  &:hover{
    h3{
      text-decoration: underline;
      font-size: 36px;
      transition: 0.3s;
    }
  }
}
h3 {
  position: absolute;
  left: 50%;
  bottom: 10px;
  transform: translateX(-50%);
  &:hover {
    color: #fff;
    transform: translateX(-50%);
  }
}
.jumbotron{
  background-image: url('https://img.guess.com/image/upload/f_auto,q_auto/v1/EU/Asset/Europe/E-Commerce/01_GUESS/HP/2020/200310_RefreshHP_JLO/homepage_03');
  background-size: cover;
}
@media (max-width: 996px) {
  .box1 {
    flex-direction: column;
  }
}
</style>

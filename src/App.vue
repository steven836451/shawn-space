<template>
  <div id="app">
    <div class="main">
      <Navbar></Navbar>
      <Alert></Alert>
      <router-view />
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Alert from "./components/AlertMessage";

export default {
  name: "App",
  components: {
    Navbar,
    Footer,
    Alert
  }
};
</script>

<style lang="scss">
@import "./assets/all";
.main {
  min-height: calc(100vh - 317px);
}
</style>

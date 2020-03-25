<template>
  <div class="message-alert">
    <transition name="alert-fade">
      <div
      class="alert alert-dismissible"
      :class="'alert-' + item.status"
      v-for="(item, i) in messages"
      :key="i"
    >
      {{ item.message }}
      <button
        type="button"
        class="close"
        @click="removeMessage()"
        aria-label="Close"
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    </transition>
  </div>
</template>

<script>
import {  mapGetters,mapMutations } from "vuex";

export default {
  name: "Navbar",
  methods: {
    ...mapMutations('alertModules',['removeMessage']),
  },
  computed: {
    ...mapGetters('alertModules',['messages']),
  },
};
</script>

<style scope>
.message-alert {
  position: fixed;
  max-width: 50%;
  top: 56px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1100;
}
.alert-fade-enter-active{
  transition: all .3s ease;
}
.alert-fade-leave-active{
  transition: all .3s ease;
}
.alert-fade-enter, .alert-fade-leave-to{
  transform:translateY(-15px);
  opacity: 0;
}
</style>
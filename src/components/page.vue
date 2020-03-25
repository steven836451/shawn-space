<template>
  <div>
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li class="page-item" :class="{'disabled' : currentPage === '1'}">
          <router-link
            class="page-link"
            aria-label="Previous"
            :to="{query:{page:currentPage-1}}"
            v-if="currentPage>1"
          >
            <span aria-hidden="true">&laquo;</span>
          </router-link>
        </li>
        <li
          class="page-item"
          v-for="page in pageData"
          :key="page"
          :class="{'active' : currentPage === page}"
        >
          <router-link class="page-link" href="#" :to="{query:{page:page}}">{{ page }}</router-link>
        </li>
        <li class="page-item" :class="{'disabled' : currentPage === pageData}">
          <router-link
            class="page-link"
            aria-label="Previous"
            :to="{query:{page:currentPage +1}}"
            v-if="currentPage<pageData"
          >
            <span aria-hidden="true">&raquo;</span>
          </router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";

export default {
  props: ["pageData", "currentPage"],
  data() {
    return {};
  },
  methods: {},
  computed: {},
  created() {}
};
</script>
<style lang="scss" scope>
.page-link {
  border: none;
}
.page-item .active {
  background-color: #fff;
}
</style>
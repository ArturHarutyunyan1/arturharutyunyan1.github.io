<template class="a">
  <div class="main">
    <LoadingComponent v-if="isLoading" />
    <router-view></router-view>
  </div>
</template>
<script>
import LoadingComponent from "@/components/LoadingComponent.vue";
export default {
  components: { LoadingComponent },
  data() {
    return {
      isLoading: true,
    };
  },
  mounted() {
    document.onreadystatechange = () => {
      if (document.readyState == "complete") {
        this.isLoading = false;
      }
    };
  },
};
</script>
<style>
@import "./assets/css/main.css";
</style>

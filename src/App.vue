<template class="a">
  <div class="main">
    <HeaderComponent />
    <LoadingComponent v-if="isLoading" />
    <router-view></router-view>
  </div>
</template>
<script>
import HeaderComponent from "./components/HeaderComponent.vue";
import LoadingComponent from "@/components/LoadingComponent.vue";
export default {
  components: { LoadingComponent, HeaderComponent },
  data() {
    return {
      isLoading: true,
    };
  },
  mounted() {
    document.onreadystatechange = () => {
      if (document.readyState == "complete") {
        setTimeout(() => {
          this.isLoading = false;
        }, 2000);
      }
    };
  },
};
</script>
<style>
@import "./assets/css/main.css";
</style>

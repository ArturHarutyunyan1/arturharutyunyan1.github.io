<template class="a">
  <LoadingComponent v-if="isLoading" />
  <div class="main">
    <HeaderComponent />
    <AboutComponent />
    <ProjectComponent />
  </div>
</template>
<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import AboutComponent from "@/components/AboutComponent.vue";
import ProjectComponent from "@/components/ProjectComponent.vue";
import LoadingComponent from "@/components/LoadingComponent.vue";
export default {
  components: {
    HeaderComponent,
    AboutComponent,
    ProjectComponent,
    LoadingComponent,
  },
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

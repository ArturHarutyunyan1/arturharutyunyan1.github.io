<!-- Eslint-disable -->

<template class="a">
  <LoadingComponent v-if="isLoading" />
  <div class="main">
    <HeaderComponent />
    <AboutComponent />
    <EducationComponent />
    <ProjectComponent />
    <ContactComponent />
  </div>
</template>
<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import AboutComponent from "@/components/AboutComponent.vue";
import EducationComponent from "@/components/EducationComponent.vue";
import ProjectComponent from "@/components/ProjectComponent.vue";
import ContactComponent from "@/components/ContactComponent.vue";
import LoadingComponent from "@/components/LoadingComponent.vue";
export default {
  components: {
    HeaderComponent,
    AboutComponent,
    EducationComponent,
    ProjectComponent,
    ContactComponent,
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

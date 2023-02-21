<template>
  <div>
    <HeaderComponent />
    <AboutComponent />
  </div>
</template>
<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import AboutComponent from "@/components/AboutComponent.vue";
export default {
  components: { HeaderComponent, AboutComponent },
};
</script>
<style>
@import "../assets/css/main.css";
</style>

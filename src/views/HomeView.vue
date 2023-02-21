<template class="a">
  <div>
    <HeaderComponent />
  </div>
</template>
<script>
import HeaderComponent from "../components/HeaderComponent.vue";
export default {
  components: { HeaderComponent },
  mounted() {
    let htmlEl = document.documentElement;
    htmlEl.setAttribute("theme", "light");
  },
};
</script>
<style>
@import "../assets/css/main.css";
</style>

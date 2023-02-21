<template class="a">
  <div class="main">
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  mounted() {
    let htmlEl = document.documentElement;
    htmlEl.setAttribute("theme", "light");
  },
};
</script>
<style>
@import "./assets/css/main.css";
</style>

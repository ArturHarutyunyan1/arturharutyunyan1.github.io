<template>
  <div>
    <div class="theme-switcher">
      <input type="checkbox" id="theme-switch" v-model="lightMode" />
      <label for="theme-switch">
        <div class="inline">
          <font-awesome-icon v-if="lightMode" icon="fa-solid fa-moon" />
          <font-awesome-icon v-else icon="fa-solid fa-sun" />
        </div>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lightMode: true,
    };
  },
  watch: {
    lightMode: {
      handler() {
        let htmlEL = document.documentElement;
        if (this.lightMode) {
          localStorage.setItem("theme", "light");
          htmlEL.setAttribute("theme", "light");
        } else {
          localStorage.setItem("theme", "dark");
          htmlEL.setAttribute("theme", "dark");
        }
      },
    },
  },
  mounted() {
    let htmlEL = document.documentElement;
    let theme = localStorage.getItem("theme");

    if (theme == "dark") {
      htmlEL.setAttribute("theme", "dark");
      this.lightMode = false;
    } else {
      htmlEL.setAttribute("theme", "light");
      this.lightMode = true;
    }
  },
};
</script>

<style scoped>
input[type="checkbox"] {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  width: auto;
  height: auto;
}
</style>

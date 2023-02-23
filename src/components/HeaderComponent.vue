<template>
  <header>
    <nav v class="navbar space-btw">
      <router-link class="logo" to="/">AH.</router-link>
      <ul class="nav-menu space-btw">
        <li class="nav-item">
          <router-link class="nav-link" to="/projects">Projects</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/">Resume</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/">Contact</router-link>
        </li>
        <li class="nav-item">
          <ThemeSwitcher />
        </li>
      </ul>
      <div class="hamburger" @click="toggleMenu()">
        <font-awesome-icon v-if="!isOpen" icon="fa-solid fa-bars" />
        <font-awesome-icon v-else icon="fa-solid fa-xmark" />
      </div>
    </nav>
  </header>
</template>

<script>
import ThemeSwitcher from "./ThemeSwitcher.vue";
export default {
  components: { ThemeSwitcher },
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      let menu = document.querySelector(".nav-menu");
      if (this.isOpen) {
        this.isOpen = false;
      } else {
        this.isOpen = true;
      }
      menu.classList.toggle("active");
    },
  },
};
</script>

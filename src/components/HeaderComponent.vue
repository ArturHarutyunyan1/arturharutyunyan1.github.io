<template>
  <header>
    <nav v class="navbar space-btw">
      <a href="/" class="logo" to="/">AH.</a>
      <ul class="nav-menu space-btw">
        <li class="nav-item">
          <a href="#about" class="nav-link">About</a>
        </li>
        <li class="nav-item">
          <a href="#projects" class="nav-link">Projects</a>
        </li>
        <li class="nav-item">
          <a href="#contact" class="nav-link">Contact</a>
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

<template>
  <header>
    <nav v class="navbar space-btw">
      <a href="/" class="logo" to="/" data-aos="fade-down" data-aos-delay="100"
        >AH.</a
      >
      <ul class="nav-menu space-btw">
        <li class="nav-item" data-aos="fade-down" data-aos-delay="200">
          <a href="#about" class="nav-link">About</a>
        </li>
        <li class="nav-item" data-aos="fade-down" data-aos-delay="300">
          <a href="#projects" class="nav-link">Projects</a>
        </li>
        <li class="nav-item" data-aos="fade-down" data-aos-delay="400">
          <a href="#contact" class="nav-link">Contact</a>
        </li>
        <li class="nav-item">
          <ThemeSwitcher data-aos="fade-down" data-aos-delay="500" />
        </li>
      </ul>
      <div
        class="hamburger"
        @click="toggleMenu()"
        data-aos="fade-down"
        data-aos-delay="600"
      >
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

<template>
  <header>
    <nav class="navbar space-btw">
      <router-link class="logo" to="/">AH.</router-link>
      <ul class="nav-menu space-btw">
        <li class="nav-item">
          <router-link class="nav-link" to="/">Projects</router-link>
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
    </nav>
  </header>
</template>

<script>
import ThemeSwitcher from "./ThemeSwitcher.vue";
export default {
  components: { ThemeSwitcher },
};
</script>

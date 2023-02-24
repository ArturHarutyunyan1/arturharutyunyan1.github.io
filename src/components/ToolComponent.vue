<template>
  <li class="triangle" data-aos="fade-down" :data-aos-delay="delay">
    {{ name }}
  </li>
</template>

<script>
export default {
  props: {
    name: { required: true, type: String },
    delay: { required: true, type: Number },
  },
  data() {
    return {};
  },
};
</script>

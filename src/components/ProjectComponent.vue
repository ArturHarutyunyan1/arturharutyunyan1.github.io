<template>
  <section class="projects center" id="projects">
    <div class="content">
      <p>FEATURED PROJECTS</p>
      <div class="row center">
        <div class="row-item" v-for="project in projects" :key="project.id">
          <CardComponent
            :liveURL="project.liveUrl"
            :projectURL="project.projectUrl"
            :title="project.name"
            :description="project.description"
            :tools="project.tools"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from "vuex";
import CardComponent from "./CardComponent.vue";
export default {
  components: { CardComponent },
  data() {
    return {};
  },
  computed: {
    ...mapState(["projects"]),
  },
};
</script>

<style scoped>
.projects {
  min-height: 100vh;
}
p {
  font-size: 18px;
  line-height: 22px;
  margin: 0 90px;
}
.row {
  flex-flow: row wrap;
  margin: 50px 0;
}
@media (max-width: 375px) {
  .row-item {
    width: 100%;
  }
}
@media (max-width: 1234px) {
  p {
    margin: 35px 90px;
  }
}
@media (max-width: 820px) {
  p {
    text-align: center;
  }
}
</style>

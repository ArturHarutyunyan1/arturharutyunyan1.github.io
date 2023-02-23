<template>
  <section class="projects center" id="projects">
    <div class="content">
      <h1>Here is a showcase of some of the projects I have done</h1>
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
h1 {
  text-align: center;
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
</style>

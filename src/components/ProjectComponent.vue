<template>
  <section class="projects center">
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
  min-height: 80vh;
}
h1 {
  text-align: center;
}
.row {
  flex-flow: row wrap;
  margin: 15px 0;
}
</style>

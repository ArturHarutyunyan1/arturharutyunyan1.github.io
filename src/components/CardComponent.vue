<template>
  <div class="card">
    <div class="content">
      <div class="space-btw">
        <div class="item">
          <font-awesome-icon icon="fa-regular fa-folder" />
        </div>
        <div class="item">
          <div class="linline">
            <a :href="projectURL" target="_blank" class="url">
              <font-awesome-icon icon="fa-brands fa-github" />
            </a>
            <a :href="liveURL" target="_blank" class="url">
              <font-awesome-icon
                icon="fa-solid fa-arrow-up-right-from-square"
              />
            </a>
          </div>
        </div>
      </div>
      <h1 class="title">{{ title }}</h1>
      <div class="description">
        <p>{{ description }}</p>
      </div>
      <div class="tools">
        <div class="inline" v-for="tool in tools" :key="tool">
          <p class="tool">{{ tool }} &nbsp;</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    liveURL: { required: false, type: String },
    projectURL: { required: true, type: String },
    title: { required: true, type: String },
    description: { required: true, type: String },
    tools: { required: true, type: Array },
  },
};
</script>

<style scoped>
.card {
  width: 350px;
  height: 250px;
  margin: 10px;
  background: var(--card-background);
  color: var(--card-text);
  border-radius: 10px;
  padding: 10px 0;
  position: relative;
}
.content {
  width: 90%;
  margin: 10px auto;
}
.fa-folder {
  font-size: 50px;
  color: var(--card-color);
}
.url {
  font-size: 20px;
  color: var(--card-text);
}
.title {
  font-size: 25px;
  margin: 10px 0;
}
.description {
  width: 100%;
  font-size: 13px;
}
.tools {
  position: absolute;
  bottom: 15px;
}
.tool {
  font-size: 13px;
  color: var(--card-color);
}
.inline {
  margin: 10px -5px;
}
.url:nth-child(1) {
  margin: 0 10px;
}
.card:hover {
  transform: translate(0, -10px);
}
.url:hover {
  color: var(--card-color);
}
</style>

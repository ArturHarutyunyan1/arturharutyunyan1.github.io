<template>
  <section class="about center">
    <div class="content">
      <p class="im">Hey, I'm</p>
      <h1 class="name gradient">Artur Harutyunyan</h1>
      <p class="about-me">
        I am a self-taught web developer. I enjoy creating things that live on
        the web, whether it's a website, a web app, or something else. During my
        projects I have been able to gain valuable experience and valuable
        knowledge from all different fields.
      </p>
      <router-link to="/">
        <button class="gradient inline">
          <font-awesome-icon icon="fa-solid fa-envelope" />
          <p>Get in touch</p>
        </button>
      </router-link>
    </div>
  </section>
</template>

<style scope>
.about {
  min-height: 60vh;
}
.im {
  margin: 0 15px;
}
.name {
  font-family: var(--fjalla);
  font-weight: 400;
  font-size: 7vw;
  line-height: 126px;
  letter-spacing: 3px;
}
.about-me {
  width: 80%;
  font-size: 20px;
}
button {
  height: 55px;
  font-size: 18px;
  padding: 0 50px;
  margin: 20px 0;
  background: transparent;
  border-radius: 10px;
  cursor: pointer;
}
.name.gradient {
  background: var(--name);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  animation: gradient 10s ease infinite;
  background-size: 400% 400%;
}
button.gradient {
  border: 3px solid transparent;
  background-clip: padding-box;
  border-radius: 10px;
  border-image: var(--get-in-touch-border);
  animation: gradient 1s ease infinite;
}
.center {
  float: left;
  flex-direction: column;
}
.inline p {
  margin: 0 10px;
  font-size: 20px;
  line-height: 24px;
}
button:hover {
  border-style: 5px;
  background: var(--get-in-touch);
  background-size: 400% 400%;
}
</style>

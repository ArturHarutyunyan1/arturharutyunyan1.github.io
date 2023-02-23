<template>
  <section class="contact center" id="contact">
    <div class="content center">
      <h1 class="gradient">Get In Touch</h1>
      <p class="text">
        I'm always looking for new opportunities, my inbox is always open if you
        have a question or a job offer or just want to say hello.
      </p>
      <div class="btn">
        <a href="mailto:arturhar@outlook.com">
          <button class="inline center gradient" id="mail">
            <font-awesome-icon icon="fa-solid fa-envelope" />
            <p>Get in touch</p>
          </button>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact {
  width: 100%;
  min-height: 100vh;
  border: none;
}
.content {
  width: 100%;
  text-align: center;
}
h1 {
  font-family: var(--fjalla);
  font-size: 70px;
}
.text {
  width: 700px;
  margin: auto;
  font-size: 30px;
}
.btn {
  margin: 25px 0;
}
h1.gradient {
  background: var(--mail);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  animation: gradient 7s ease infinite;
  background-size: 400% 400%;
}
h1::selection {
  background: transparent;
}
@media (max-width: 780px) {
  .text {
    width: 100%;
    font-size: 3vw;
  }
}
@media (max-width: 400px) {
  h1 {
    font-size: 15vw;
  }
  .text {
    font-size: 5vw;
  }
  .btn {
    width: 90%;
  }
}
</style>

<template>
  <section class="about center" id="about">
    <div class="content">
      <p class="im">Hey, I'm</p>
      <h1 class="name gradient">Artur Harutyunyan</h1>
      <p class="about-me">
        I am a self-taught web developer. I enjoy creating things that live on
        the web, whether it's a website, a web app, or something else. During my
        projects I have been able to gain valuable experience and valuable
        knowledge from all different fields.
      </p>
      <div class="row working-tools">
        <p>Here are some tools I've been working with</p>
        <ul class="row-item" v-for="tool in tools" :key="tool.id">
          <li class="triangle">
            {{ tool.name }}
          </li>
        </ul>
      </div>
      <div class="row buttons">
        <div class="row-item">
          <a
            href="https://www.upwork.com/freelancers/~0142ed6ab96f45439e"
            target="blank"
          >
            <button class="inline center gradient" id="upwork">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076l.008-.042c.207-1.143.849-3.06 2.839-3.06a2.705 2.705 0 0 1 2.703 2.703a2.707 2.707 0 0 1-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366c-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112a2.551 2.551 0 0 1-2.547 2.548a2.55 2.55 0 0 1-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303c2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109c3 0 5.439-2.452 5.439-5.45c0-3-2.439-5.439-5.439-5.439z"
                />
              </svg>
              <p>Upwork</p>
            </button>
          </a>
        </div>
        <div class="row-item">
          <a href="https://github.com/ArturHarutyunyan1" target="blank">
            <button class="inline center gradient" id="github">
              <font-awesome-icon icon="fa-brands fa-github" />
              <p>Github</p>
            </button>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(["tools"]),
  },
};
</script>

<style scope>
.about {
  min-height: 100vh;
}
.im {
  margin: 0 10px;
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
  font-size: 1.5vw;
}
.working-tools {
  width: 400px;
  display: flex;
  flex-wrap: wrap;
  margin: 15px 0;
}
.working-tools .row-item {
  padding: 5px;
  flex: 40%;
}
.working-tools p {
  margin: 5px 0;
}
button {
  width: 230px;
  height: 55px;
  font-size: 18px;
  padding: 0 50px;
  margin: 20px;
  border-radius: 10px;
  border: none;
  color: white;
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

#mail {
  background: var(--mail);
  animation: gradient 7s linear infinite;
  background-size: 400% 400%;
}
#upwork {
  background: var(--upwork);
  animation: gradient 7s linear infinite;
  background-size: 400% 400%;
}
#github {
  background: var(--github);
  animation: gradient 7s linear infinite;
  background-size: 400% 400%;
}
.center {
  float: left;
  flex-direction: column;
}
.inline p {
  margin: 0 5px;
  font-size: 16px;
}
button.center {
  flex-direction: row;
}
.buttons {
  margin: 0 -20px;
}
.triangle::before {
  content: "";
  display: inline-block;
  margin-right: 5px;
  width: 0;
  height: 0;
  transform: rotate(90deg) translateX(-3px);
  border-style: solid;
  border-width: 0 4px 6px 4px;
  border-color: transparent transparent var(--text) transparent;
}
@media (max-width: 880px) {
  .name {
    font-size: 70px;
  }
  .about-me {
    width: 100%;
    font-size: 20px;
  }
  .working-tools {
    width: 90%;
  }
  .buttons {
    flex-direction: column;
  }
  .center {
    justify-content: center;
    align-items: center;
    float: unset;
  }
  .inline p {
    font-size: 13px;
  }
}

@media (max-width: 625px) {
  .about {
    width: 100%;
  }
  .im {
    margin: 0;
  }
  .name {
    font-size: 10vw;
    line-height: 1.3;
  }
  .about-me {
    font-size: 3.5vw;
  }
  .working-tools {
    width: 100%;
  }
  button {
    width: 100%;
    margin: 10px auto;
  }
  .buttons {
    width: 100%;
    margin: 0;
  }
}
</style>

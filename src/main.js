import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import Aos from "aos";
import "aos/dist/aos.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faMoon,
  faSun,
  faBars,
  faXmark,
  faEnvelope,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faFolder } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(
  faMoon,
  faSun,
  faBars,
  faXmark,
  faEnvelope,
  faGithub,
  faArrowUpRightFromSquare,
  faFolder
);

createApp(App)
  .use(store)
  .use(Aos)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");

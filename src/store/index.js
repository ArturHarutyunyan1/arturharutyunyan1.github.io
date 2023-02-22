import { createStore } from "vuex";

export default createStore({
  state: {
    tools: [
      {
        id: 1,
        name: "HTML",
      },
      {
        id: 2,
        name: "CSS",
      },
      {
        id: 3,
        name: "JavaScript",
      },
      {
        id: 4,
        name: "Vue.js",
      },
      {
        id: 5,
        name: "PHP",
      },
      {
        id: 6,
        name: "WordPress",
      },
      {
        id: 7,
        name: "SQL",
      },
      {
        id: 8,
        name: "MySQL",
      },
      {
        id: 9,
        name: "Git",
      },
      {
        id: 10,
        name: "Figma",
      },
    ],
  },
  getters: {},
  mutations: {
    setWorkingTools(state, payload) {
      state.tools = payload;
      console.log(state);
    },
  },
  actions: {},
});

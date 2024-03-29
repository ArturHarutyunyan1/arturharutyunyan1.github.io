import { createStore } from "vuex";

export default createStore({
  state: {
    tools: [
      {
        id: 1,
        name: "HTML",
        delay: 1100,
      },
      {
        id: 2,
        name: "CSS",
        delay: 1200,
      },
      {
        id: 3,
        name: "JavaScript",
        delay: 1300,
      },
      {
        id: 4,
        name: "Vue.js",
        delay: 1400,
      },
      {
        id: 5,
        name: "PHP",
        delay: 1500,
      },
      {
        id: 6,
        name: "WordPress",
        delay: 1600,
      },
      {
        id: 7,
        name: "SQL",
        delay: 1700,
      },
      {
        id: 8,
        name: "MySQL",
        delay: 1800,
      },
      {
        id: 9,
        name: "Git",
        delay: 1900,
      },
      {
        id: 10,
        name: "Figma",
        delay: 2000,
      },
    ],
    projects: [
      {
        id: 1,
        name: "REST Countries",
        description:
          "The user can see all the countries displayed on the main page, search for the country, and view the page with detailed information about the selected country.",
        liveUrl: "https://arturharutyunyan1.github.io/rest-countries/",
        projectUrl: "https://github.com/ArturHarutyunyan1/rest-countries",
        tools: ["Vue.js", "CSS", "REST Countries API"],
        delay: 200,
      },
      {
        id: 2,
        name: "IP address tracker",
        description:
          "The user can see their own IP address on initial page load, search for any IP addresses or domains, and view key information and location.",
        liveUrl: "https://arturharutyunyan1.github.io/ip-address-tracker/",
        projectUrl: "https://github.com/ArturHarutyunyan1/ip-address-tracker",
        tools: ["HTML", "CSS", "JavaScript", "IP Geolocation API", "Leaflet"],
        delay: 300,
      },
      {
        id: 3,
        name: "Github user finder",
        description:
          "User can search Github username and view detailed user information.",
        liveUrl: "https://github-user-finder-arturharutyunyan1.vercel.app",
        projectUrl: "https://github.com/ArturHarutyunyan1/github-user-finder",
        tools: ["Vue.js", "CSS", "Github API"],
        delay: 400,
      },
      {
        id: 4,
        name: "Tic Tac Toe",
        description: "Tic Tac Toe game for 2 players",
        liveUrl: "https://tic-tac-toe-arturharutyunyan.vercel.app",
        projectUrl: "https://github.com/ArturHarutyunyan1/tic-tac-toe",
        tools: ["HTML", "CSS", "JavaScript"],
        delay: 500,
      },
      {
        id: 5,
        name: "Tip Calculator",
        description:
          "User can calculate correct tip and total bill value per person",
        liveUrl: "https://pr-tip-calculator.vercel.app",
        projectUrl: "https://github.com/ArturHarutyunyan1/tip-calculator",
        tools: ["Vue.js", "CSS"],
        delay: 600,
      },
      {
        id: 6,
        name: "Todo app",
        description:
          "The user can add, delete, mark as completed tasks in the list",
        liveUrl: "https://pr-todo-app.vercel.app",
        projectUrl: "https://github.com/ArturHarutyunyan1/todo-app",
        tools: ["Vue.js", "CSS"],
        delay: 700,
      },
    ],
  },
  getters: {},
  mutations: {
    setWorkingTools(state, payload) {
      state.tools = payload;
      console.log(state);
    },
    setProjects(state, payload) {
      state.projects = payload;
    },
  },
  actions: {},
});

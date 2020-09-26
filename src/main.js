// import { createRouter } from "vue-router";
// import VueRouter from "vue-router";

import { createApp } from "vue";

import Vue from "vue";
import App from "./App.vue";
import BaseCard from "./theLearningResource/components/UI/BaseCard.vue";
import BaseButton from "./theLearningResource/components/UI/BaseButton.vue";
import BaseDialog from "./theLearningResource/components/UI/BaseDialog";
import TeamsList from "./routing/components/teams/TeamsList";
import UsersList from "./routing/components/users/UsersList";

// console.log(VueRouter);

// register the routes
// const router = createRouter({
//   history: createWebHistory(),
//   routes: [
//     { path: "./routing/teams", component: TeamsList },
//     { path: "./routing/users", component: UsersList }
//   ]
// });

// register component globally for theLearning Resource Project
Vue.component("base-card", BaseCard);
Vue.component("base-button", BaseButton);
Vue.component("base-dialog", BaseDialog);

const app = new Vue({
  el: "#app",
  render: h => h(App)
});

// to connect the router to the app
// app.use(router);

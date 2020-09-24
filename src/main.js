import Vue from "vue";
import App from "./App.vue";
import BaseCard from "./theLearningResource/components/UI/BaseCard.vue";
import BaseButton from "./theLearningResource/components/UI/BaseButton.vue";
import BaseDialog from "./theLearningResource/components/UI/BaseDialog";

// register component globally for theLearning Resource Project
Vue.component("base-card", BaseCard);
Vue.component("base-button", BaseButton);
Vue.component("base-dialog", BaseDialog);

const app = new Vue({
  el: "#app",
  render: h => h(App)
});

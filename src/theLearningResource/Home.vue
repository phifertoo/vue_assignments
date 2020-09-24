<template>
  <div>
    <the-header title="RememberMe"></the-header>
    <!-- pass all the storedResources in as a prop -->
    <!-- <stored-resources :resources="storedResources"></stored-resources> -->
    <the-resources></the-resources>
  </div>
</template>

<script>
import LearningResource from "./components/learning-resources/LearningResource";
import StoredResources from "./components/learning-resources/StoredResources";
import TheHeader from "./components/layouts/TheHeader";
import TheResources from "./components/learning-resources/TheResources";

export default {
  components: {
    LearningResource,
    StoredResources,
    TheHeader,
    TheResources,
  },
  // data() {
  //   return {
  //     storedResources: [
  //       {
  //         id: "official-guide",
  //         title: "Official Guide",
  //         description: "The Official Vue.js documentation",
  //         link: "https://vuejs.org",
  //       },
  //       {
  //         id: "google",
  //         title: "Google",
  //         description: "Learn to google...",
  //         link: "https://google.com",
  //       },
  //     ],
  //   };
  // },
};
</script>


<style>
/* global styling scope */
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

* {
  box-sizing: border-box;
}

html {
  font-family: "Roboto", sans-serif;
}

body {
  margin: 0;
}
</style>
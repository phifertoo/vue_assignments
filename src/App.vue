<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <button @click="selectedComponent = 'appQuote'">Quote</button>
        <button @click="selectedComponent = 'appAuthor'">Author</button>
        <button @click="selectedComponent = 'appNew'">New</button>
        <button @click="selectedComponent = 'appAssignment16'">
          Assginment 16
        </button>
        <button @click="selectedComponent = 'appTheLearningResource'">
          The Learning Resource
        </button>
        <button @click="selectedComponent = 'appFormsHome'">Forms Home</button>
        <button @click="selectedComponent = 'appHttpHome'">HTTP Home</button>
        <hr />
        <p>{{ selectedComponent }}</p>
        <!-- <app-quote>
          <h2 slot="title">{{quoteTitle}}</h2>
          <p slot="content">A wonderful quote</p>
        </app-quote>-->
        <keep-alive>
          <component :is="selectedComponent"></component>
        </keep-alive>
      </div>
    </div>
  </div>
</template>

<script>
import Quote from "./components/Quote.vue";
import Author from "./components/Author";
import New from "./components/New";
import Assignment16 from "./assignment16/Home";
import theLearningResource from "./theLearningResource/Home";
import FormsHome from "./forms/FormsHome";
import HttpHome from "./http/HttpHome";

export default {
  name: "app",
  data: function () {
    return {
      quoteTitle: "The Quote",
      selectedComponent: "appQuote",
    };
  },
  components: {
    appQuote: Quote,
    appAuthor: Author,
    appNew: New,
    appAssignment16: Assignment16,
    appTheLearningResource: theLearningResource,
    appFormsHome: FormsHome,
    appHttpHome: HttpHome,
  },
};
</script>

<style lang="scss">
.sample {
  background: red;
}

.sample2 {
  background: blue;
}
</style>

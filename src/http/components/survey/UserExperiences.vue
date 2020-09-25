<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click.native="loadExperiences"
          >Load Submitted Experiences</base-button
        >
      </div>
      <!-- check if error first -->
      <p v-if="!isLoading && error">{{ error }}</p>
      <p v-else-if="isLoading">Loading...</p>
      <p v-else-if="!isLoading && (!results || results.length === 0)">
        No stored experiences found. Start adding some survey results
      </p>
      <ul v-else>
        <survey-result
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        ></survey-result>
      </ul>
    </base-card>
  </section>
</template>

<script>
import SurveyResult from "./SurveyResult.vue";

export default {
  // props: ['results'],
  data() {
    return {
      results: [],
      isLoading: false,
      error: null
    };
  },
  components: {
    SurveyResult
  },
  methods: {
    loadExperiences() {
      this.isLoading = true;
      this.error = null;
      // fetch returns a promise
      const instance = this;
      fetch(
        // GET Request
        "https://vue-http-demo-76138.firebaseio.com/surveys.json"
        // "https://vue-http-demo-76138.firebaseio.com/surveys"
      )
        // .then returns a promise
        .then(function(response) {
          if (response.ok) {
            // parse JSON reponse data
            return response.json();
          }
        })
        .then(function(data) {
          instance.isLoading = false;
          // you cannot do this.results = data because data is not an array
          const results = [];
          Object.keys(data).forEach(element =>
            results.push({
              id: element,
              name: data[element].name,
              rating: data[element].rating
            })
          );
          // instance = this (defined on line 38)
          instance.results = results;
        })
        .catch(error => {
          console.log(error);
          instance.isLoading = false;
          instance.error = "Failed to fetch data - please try again later";
        });
    }
  },
  // fires when the component mounts so any logic in here is automatically fired when the page loadds
  mounted() {
    this.loadExperiences();
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>

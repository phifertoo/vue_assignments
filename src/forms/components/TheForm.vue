<template>
  <form @submit.prevent="submitForm">
    <div :class="{ invalid: userNameValidity === 'invalid' }">
      <label for="user-name">Your Name</label>
      <!-- <input id="user-name" name="user-name" type="text" @input /> -->
      <!-- vue will track all changes to v-model -->
      <input
        id="user-name"
        name="user-name"
        type="text"
        v-model="userName"
        @blur="validateInput"
      />
      <p v-if="userNameValidity === 'invalid'">Please enter a valid name!</p>
    </div>
    <div>
      <label for="age">Your Age (Years)</label>
      <!-- v-model values will be based on the type set in the input -->
      <!-- refs value will be converted into strings -->

      <input
        id="age"
        name="age"
        type="number"
        v-model="userAge"
        ref="ageInput"
      />
    </div>
    <div>
      <label for="referrer">How did you hear about us?</label>
      <!-- v-model is two-way binding so when you click on an option, it will be stored in referrer -->
      <select id="referrer" name="referrer" v-model="referrer">
        <option value="google">Google</option>
        <option value="wom">Word of mouth</option>
        <option value="newspaper">Newspaper</option>
      </select>
    </div>
    <div>
      <h2>What are you interested in?</h2>
      <div>
        <input
          id="interest-news"
          name="interest"
          type="checkbox"
          v-model="interest"
          value="news"
        />
        <label for="interest-news">News</label>
      </div>
      <div>
        <input
          id="interest-tutorials"
          name="interest"
          type="checkbox"
          v-model="interest"
          value="tutorials"
        />
        <label for="interest-tutorials">Tutorials</label>
      </div>
      <div>
        <input
          id="interest-nothing"
          name="interest"
          type="checkbox"
          v-model="interest"
          value="nothing"
        />
        <label for="interest-nothing">Nothing</label>
      </div>
    </div>
    <div>
      <h2>How do you learn?</h2>
      <div>
        <!-- you can only select one radio button as long as they all have the same name -->
        <input
          id="how-video"
          name="how"
          type="radio"
          v-model="how"
          value="video"
        />
        <label for="how-video">Video Courses</label>
      </div>
      <div>
        <input
          id="how-blogs"
          name="how"
          type="radio"
          v-model="how"
          value="blogs"
        />
        <label for="how-blogs">Blogs</label>
      </div>

      <div>
        <input
          id="how-other"
          name="how"
          type="radio"
          v-model="how"
          value="other"
        />
        <label for="how-other">Other</label>
      </div>
    </div>
    <div>
      <rating-control v-model="rating"></rating-control>
    </div>
    <div>
      <input
        type="checkbox"
        id="confirm-terms"
        name="confirm-terms"
        v-model="confirm"
      />
      <label for="confirm-terms">Agree to terms of use?</label>
    </div>
    <div>
      <button>Save Data</button>
    </div>
  </form>
</template>

<script>
import RatingControl from "./RatingControl";

export default {
  components: {
    RatingControl
  },
  data() {
    return {
      userName: "",
      userAge: null,
      referrer: "wom",
      interest: [],
      how: null,
      confirm: false,
      userNameValidity: "pending",
      rating: "test"
    };
  },
  methods: {
    submitForm() {
      console.log(this.userName);
      this.userName = "";
      // v-model values will be based on the type set in the input
      console.log(this.userAge);
      // refs value will be converted into strings
      console.log(this.$refs.ageInput.value);
      this.userAge = null;
      console.log(this.referrer);
      this.referrer = "wom";
      console.log(this.interest);
      this.interest = [];
      console.log(this.how);
      this.how = null;
      console.log(this.confirm);
      this.confirm = false;
      console.log(this.rating);
      this.rating = null;
    },
    validateInput() {
      if (this.userName.trim() === "") {
        this.userNameValidity = "invalid";
      } else {
        this.userNameValidity = "valid";
      }
    }
  }
};
</script>

<style scoped>
form {
  margin: 2rem auto;
  max-width: 40rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 2rem;
  background-color: #ffffff;
}

.form-control {
  margin: 0.5rem 0;
}

.invalid input {
  border-color: red;
}

.invalid label {
  color: red;
}

label {
  font-weight: bold;
}

h2 {
  font-size: 1rem;
  margin: 0.5rem 0;
}

input,
select {
  display: block;
  width: 100%;
  font: inherit;
  margin-top: 0.5rem;
}

select {
  width: auto;
}

input[type="checkbox"],
input[type="radio"] {
  display: inline-block;
  width: auto;
  margin-right: 1rem;
}

input[type="checkbox"] + label,
input[type="radio"] + label {
  font-weight: normal;
}

button {
  font: inherit;
  border: 1px solid #0076bb;
  background-color: #0076bb;
  color: white;
  cursor: pointer;
  padding: 0.75rem 2rem;
  border-radius: 30px;
}

button:hover,
button:active {
  border-color: #002350;
  background-color: #002350;
}
</style>

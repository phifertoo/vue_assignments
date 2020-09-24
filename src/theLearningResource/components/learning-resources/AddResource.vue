<template>
  <div>
    <!-- @close listens for a close event from base-dialog -->
    <base-dialog v-if="inputIsInvalid" title="Invalid Input" @close="confirmError">
      <template #default>
        <p>Input values missing</p>
        <p>Try again</p>
      </template>
      <template #actions>
        <base-button @click.native="confirmError">okay</base-button>
      </template>
    </base-dialog>
    <base-card>
      <form @submit.prevent="submitData" class="form-control">
        <div>
          <label for="title">Title</label>
          <input type="text" id="title" name="title" ref="titleInput" />
          <label for="desctiption">Description</label>
          <textarea id="description" name="desctiption" rows="3" ref="descInput"></textarea>
          <label for="link">Link</label>
          <input type="url" id="link" name="link" class="mb-4" ref="linkInput" />
          <base-button type="submit">Add Resource</base-button>
        </div>
      </form>
    </base-card>
  </div>
</template>

<script>
export default {
  inject: ["addResource"],
  data() {
    return {
      inputIsInvalid: false,
    };
  },
  methods: {
    submitData() {
      const enteredTitle = this.$refs.titleInput.value;
      const enteredDescription = this.$refs.descInput.value;
      const enteredUrl = this.$refs.linkInput.value;

      if (
        enteredTitle.trim() === "" ||
        enteredDescription.trim() === "" ||
        enteredUrl.trim() === ""
      ) {
        this.inputIsInvalid = true;
        return;
      }
      this.addResource(enteredTitle, enteredDescription, enteredUrl);
    },
    confirmError() {
      this.inputIsInvalid = false;
    },
  },
};
</script>

<style scoped>
form {
  height: 500px;
}
label {
  font-weight: bold;
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>
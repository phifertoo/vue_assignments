<template>
  <div>
    <base-card>
      <base-button
        @click.native="setSelectedTab('stored-resources')"
        :mode="storedResButtonMode"
      >Stored Resources</base-button>
      <base-button
        @click.native="setSelectedTab('add-resource')"
        :mode="addResButtonMode"
      >Add Resource</base-button>
    </base-card>
    <keep-alive>
      <component :is="selectedTab"></component>
    </keep-alive>
  </div>
</template>

<script>
import StoredResources from "./StoredResources";
import AddResource from "./AddResource";

export default {
  components: {
    StoredResources,
    AddResource,
  },
  data() {
    return {
      selectedTab: "stored-resources",
      storedResources: [
        {
          id: "official-guide",
          title: "Official Guide",
          description: "The Official Vue.js documentation",
          link: "https://vuejs.org",
        },
        {
          id: "google",
          title: "Google",
          description: "Learn to google...",
          link: "https://google.com",
        },
      ],
    };
  },
  //   giving the data below to all child components
  provide() {
    return {
      resources: this.storedResources,
      addResource: this.addResource,
      deleteResource: this.removeResource,
    };
  },
  computed: {
    storedResButtonMode() {
      return this.selectedTab === "stored-resources" ? null : "flat";
    },
    addResButtonMode() {
      return this.selectedTab === "add-resource" ? null : "flat";
    },
  },
  methods: {
    setSelectedTab: function (tab) {
      this.selectedTab = tab;
    },
    addResource: function (title, description, url) {
      const newResource = {
        id: new Date().toISOString(),
        title: title,
        description,
        link: url,
      };
      this.storedResources.unshift(newResource);
      this.selectedTab = "stored-resources";
    },
    removeResource(resId) {
      /* you cannot replace the storedResources array
      with a new filtered array because the reference to the old
      array will be overriden by the new array. However, all of the
      components that were using the old reference maintain their
      reference and won't acknowledge a change in the array */
      console.log("l");
      const resIndex = this.storedResources.findIndex(
        (res) => res.id === resId
      );
      this.storedResources.splice(resIndex, 1);
    },
  },
};
</script>

<style>
</style>
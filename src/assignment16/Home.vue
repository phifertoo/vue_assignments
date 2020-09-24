<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <br />
        <button
          class="btn btn-primary"
          @click="selectedComponent='appBlue'; color='blue'"
        >Load Blue Template</button>
        <button
          class="btn btn-success"
          @click="selectedComponent='appGreen'; color='green'"
        >Load Green Template</button>
        <button
          class="btn btn-danger"
          @click="selectedComponent='appRed'; color='red'"
        >Load Red Template</button>
        <hr />
        <keep-alive>
          <component :is="selectedComponent">
            <h2 slot="title">{{color}}</h2>
          </component>
        </keep-alive>
      </div>
    </div>
  </div>
</template>

<script>
import Blue from "./Blue";
import Green from "./Green";
import Red from "./Red";

export default {
  data: function () {
    return {
      selectedComponent: "appBlue",
      color: "blue",
    };
  },
  components: {
    appBlue: Blue,
    appGreen: Green,
    appRed: Red,
  },
};
</script>

<style>
</style>
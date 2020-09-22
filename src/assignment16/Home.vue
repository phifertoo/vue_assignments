<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <br />
        <button class="btn btn-primary">Load Blue Template</button>
        <button class="btn btn-success">Load Green Template</button>
        <button class="btn btn-danger">Load Red Template</button>
        <hr />
        <app-blue></app-blue>
        <app-green></app-green>
        <app-red></app-red>
      </div>
    </div>
  </div>
</template>

<script>
import Blue from "./Blue";
import Green from "./Green";
import Red from "./Red";

export default {
  components: {
    appBlue: Blue,
    appGreen: Green,
    appRed: Red,
  },
};
</script>

<style>
</style>
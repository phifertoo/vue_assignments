<template>
  <div>
    <slot name="title"></slot>
    <slot name="content"></slot>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
div {
  border: 1px solid red;
  background-color: red;
  padding: 30px;
  margin: 20px auto;
  text-align: center;
}
</style>
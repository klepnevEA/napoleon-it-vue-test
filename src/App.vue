<template>
  <div class="wrapper">
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "app"
});
</script>

<style lang="scss">
@import "./styles/_variables.scss";
* {
  box-sizing: border-box;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.wrapper {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}

.title {
  font-size: 30px;
  margin-bottom: 20px;
  text-align: center;
}

.btn {
  display: block;
  border: 1px solid $border;
  background-color: $bg-color;
  text-decoration: none;
  border-radius: 5px;
  padding: 10px;
  font-size: 16px;
  text-align: center;
  color: #000;
  outline: none;
  cursor: pointer;

  &_white {
    background-color: #fff;
  }
}

.input {
  border-radius: 5px;
  border: 1px solid $border;
  background-color: #fff;
  font-size: 16px;
  height: 40px;
  outline: none;
}
</style>

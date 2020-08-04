<template>
  <div id="app">
    <Layout />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Layout from "./components/Layout/Layout.vue";

@Options({
  components: {
    Layout,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
$color-bg: #e8eaf3;
$color-nm-light: #ffffff;
$color-nm-dark: #c5c7cf;

* {
  background: $color-bg;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.container {
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
@media (min-width: 768px) {
  .container {
    width: 750px;
  }
}
@media (min-width: 992px) {
  .container {
    width: 970px;
  }
}
@media (min-width: 1200px) {
  .container {
    width: 1170px;
  }
}

.flex-1 {
  flex: 1;
}
.flex-2 {
  flex: 2;
}
.flex-3 {
  flex: 3;
}
.flex-4 {
  flex: 4;
}
.flex-5 {
  flex: 5;
}
.flex-6 {
  flex: 6;
}
.flex-7 {
  flex: 7;
}
.flex-8 {
  flex: 8;
}
.flex-9 {
  flex: 9;
}
.flex-10 {
  flex: 10;
}
.flex-11 {
  flex: 11;
}
.flex-12 {
  flex: 12;
}

.raised-m {
  border-radius: 15px;
  box-shadow: 5px 5px 10px $color-nm-dark, -5px -5px 10px $color-nm-light;
}

.lowered-m {
  border-radius: 15px;
  box-shadow: inset 5px 5px 10px $color-nm-dark,
    inset -5px -5px 10px $color-nm-light;
}
</style>

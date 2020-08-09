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
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap");

@font-face {
  font-family: "BLOKK";
  src: url("./assets/fonts/blokk/BLOKKNeue-Regular.eot");
  src: url("./assets/fonts/blokk/BLOKKNeue-Regular.eot?#iefix")
      format("embedded-opentype"),
    url("./assets/fonts/blokk/BLOKKNeue-Regular.woff2") format("woff2"),
    url("./assets/fonts/blokk/BLOKKNeue-Regular.woff") format("woff"),
    url("./assets/fonts/blokk/BLOKKNeue-Regular.otf") format("opentype"),
    url("./assets/fonts/blokk/BLOKKNeue-Regular.ttf") format("truetype"),
    url("./assets/fonts/blokk/BLOKKNeue-Regular.svg#BLOKKRegular") format("svg");
}

html {
  background: $color-bg;
}

body {
  padding: 0;
  margin: 0;
}

#app {
  font-family: "Open Sans", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $color-text-primary;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  color: $color-text-dark;
  font-weight: 900;
}

.blokk {
  font-family: "BLOKK";
  font-size: 2em;
  line-height: 1;
  word-spacing: -0.7em;
}

h1 {
  font-size: 3em;
}

h2 {
  font-size: 3em;
}

label,
.label {
  color: $color-label;
  font-weight: 500;
}

.text-section-wrapper {
  padding: 4.5em;
  max-width: 600px;

  p {
    line-height: 1.6;
  }

  a {
    color: inherit;
  }

  h2 {
    padding: 0;
    margin: 0 0 0.7em 0;
  }
}

.app-icon {
  font-weight: 900;
  font-size: 1.5em;
  a {
    padding-left: unset;
    color: $color-text-dark;
    text-decoration: none;
  }
}

.container {
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
@media (max-width: 768px) {
  h1 {
    font-size: 2em;
  }

  h2 {
    font-size: 2em;
  }

  .blokk {
    font-size: 1.4em;
  }
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
</style>

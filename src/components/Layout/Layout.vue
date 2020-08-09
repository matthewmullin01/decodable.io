<template>
  <div id="home">
    <Header />
    <Body />
    <Footer />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Header from "./Header.vue";
import Body from "./Body.vue";
import Footer from "./Footer.vue";

@Options({
  components: {
    Header,
    Footer,
    Body,
  },
})
export default class Layout extends Vue {}
</script>

<style scoped lang="scss">
</style>

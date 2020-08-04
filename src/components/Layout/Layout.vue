<template>
  <div>
    <Header />
    <Body />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Header from "./Header.vue";
import Body from "./Body.vue";

@Options({
  components: {
    Header,
    Body,
  },
})
export default class Layout extends Vue {}
</script>

<style scoped lang="scss">
</style>

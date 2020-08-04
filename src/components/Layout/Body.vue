<template>
  <div>
    <Headline />
    <Main />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Headline from "../Headline.vue";
import Main from "../Main.vue";

@Options({
  components: {
    Headline,
    Main,
  },
})
export default class Body extends Vue {}
</script>

<style scoped lang="scss">
</style>

<template>
  <div>
    <div class="headline">
      <h1>Secure Encoding and Decoding</h1>
      <p>We provides super secure, completly offline decoding and encoding for base64 formats.</p>
    </div>
    <HeroButton>Get Started</HeroButton>
    <!-- <Button class="raised-m">Get Started</Button> -->
    <!-- <HeroButton>Get Started</HeroButton> -->
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import HeroButton from "./HeroButton.vue";
import Button from "./Button.vue";

@Options({
  components: {
    HeroButton,
    Button,
  },
})
export default class Headline extends Vue {}
</script>

<style scoped lang="scss">
.headline {
  margin: 65px auto;
  max-width: 680px;

  h1 {
    font-size: 2.4em;
    padding: 25px;
  }
}
</style>

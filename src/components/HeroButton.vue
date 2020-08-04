<template>
  <button>
    <slot>HeroButton</slot>
  </button>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  components: {},
})
export default class HeroButton extends Vue {}
</script>

<style scoped lang="scss">
$color-dark: #3382fe;
$color-light: #5c9dff;

@mixin gradientBg($startColor, $endColor) {
  background: $startColor;
  background: -moz-linear-gradient(
    left,
    $startColor 0%,
    $endColor 80%,
    $endColor 100%
  );
  background: -webkit-linear-gradient(
    left,
    $startColor 0%,
    $endColor 80%,
    $endColor 100%
  );
  background: linear-gradient(
    to right,
    $startColor 0%,
    $endColor 80%,
    $endColor 100%
  );
}

button {
  border: none;
  display: inline-block;
  padding: 0.9em 3em;
  border-radius: 100px;
  box-sizing: border-box;
  font-weight: 600;
  font-size: 1em;
  color: #ffffff;
  text-align: center;
  position: relative;

  @include gradientBg($color-dark, $color-light);
  &::before {
    @include gradientBg($color-dark, $color-light);
    content: "";
    display: inline-block;
    height: 40px;
    position: absolute;
    bottom: -3px;
    left: 30px;
    right: 30px;
    z-index: -1;
    border-radius: 30em;
    filter: blur(14px) brightness(0.95);
    transform-style: preserve-3d;
    transition: all 0.3s ease-out;
  }

  &:active {
    box-shadow: inset 0 0.6em 2em -0.3em rgba(0, 0, 0, 0.25),
      inset 0 0 0em 0.05em rgba(255, 255, 255, 0.2);
  }

  &:focus {
    outline: none;
  }
}

@media all and (max-width: 30em) {
  button {
    display: block;
    margin: 0.4em auto;
  }
}
</style>

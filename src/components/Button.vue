<template>
  <button>
    <slot>Button</slot>
  </button>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  components: {},
})
export default class Button extends Vue {}
</script>

<style scoped lang="scss">
button {
  border: none;
  display: inline-block;
  padding: 0.9em 3em;
  border-radius: 100px;
  box-sizing: border-box;
  font-weight: 600;
  font-size: 1em;
  color: #ffffff;
  background-color: #4dab6d;
  text-align: center;
  position: relative;

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

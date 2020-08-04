<template>
  <div class="toggle-wrapper">
    <label class="toggle-control">
      <input type="checkbox" v-model="checked" @change="$emit('toggle', !checked)" />
      <span class="control"></span>
    </label>
    <span class="toggle-label">{{ label }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

const Toggle = defineComponent({
  data() {
    return {
      checked: true,
    };
  },
  props: {
    label: {
      type: String,
      default: "label",
    },
  },
});

export default Toggle;
</script>

<style scoped lang="scss">
// Tweak these to change the style of the toggle
$toggle-background-color-on: dodgerblue;
$toggle-background-color-off: rgb(184, 184, 184);
$toggle-control-color: white;
$color-nm-light-off: #dfdfdf;
$color-nm-dark-off: #919191;
$color-nm-light-on: #4dafff;
$color-nm-dark-on: #3981cf;
$toggle-width: 50px;
$toggle-height: 30px;
$toggle-gutter: 5px;
$toggle-radius: 50%;
$toggle-control-speed: 0.15s;
$toggle-control-ease: ease-in;

// These are our computed variables
// change at your own risk.
$toggle-radius: $toggle-height / 2;
$toggle-control-size: $toggle-height - ($toggle-gutter * 2);

.toggle-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
}

.toggle-label {
  padding-left: 5px;
}

.toggle-control {
  display: block;
  position: relative;
  width: $toggle-width;
  height: $toggle-height;
  cursor: pointer;
  font-size: 22px;
  user-select: none;

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  input:checked ~ .control {
    background-color: $toggle-background-color-on;
    box-shadow: inset 5px 5px 10px $color-nm-dark-on,
      inset -5px -5px 10px $color-nm-light-on;

    &:after {
      left: $toggle-width - $toggle-control-size - $toggle-gutter;
    }
  }

  .control {
    position: absolute;
    top: 0;
    left: 0;
    height: $toggle-height;
    width: $toggle-width;
    border-radius: $toggle-radius;
    background-color: $toggle-background-color-off;
    transition: background-color $toggle-control-speed $toggle-control-ease;
    box-shadow: inset 5px 5px 10px $color-nm-dark-off,
      inset -5px -5px 10px $color-nm-light-off;

    &:after {
      content: "";
      position: absolute;
      left: $toggle-gutter;
      top: $toggle-gutter;
      width: $toggle-control-size;
      height: $toggle-control-size;
      border-radius: $toggle-radius;
      background: $toggle-control-color;
      transition: left $toggle-control-speed $toggle-control-ease;
    }
  }
}

/* Center the control */
body {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #222229;
  color: white;
}
</style>

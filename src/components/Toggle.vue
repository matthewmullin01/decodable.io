<template>
  <div class="toggle-wrapper">
    <span class="toggle-label label">{{ label }}</span>
    <label class="toggle-control">
      <input type="checkbox" :checked="value" @change="this.$emit('update:value', !this.value)" />
      <span class="control"></span>
    </label>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    value: Boolean,
    label: String,
  },
};
</script>

<style scoped lang="scss">
$toggle-background-color-on: #4b92ff;
$toggle-background-color-off: #d5dbf3;
$toggle-control-color: white;

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
    box-shadow: inset 3px 3px 6px $color-nm-dark-on,
      inset -3px -3px 6px $color-nm-light-on;

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
    box-shadow: inset 3px 3px 6px $color-nm-dark-off,
      inset -3px -3px 6px $color-nm-light-off;

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

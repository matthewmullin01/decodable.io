<template>
  <div class="wrapper raised-m">
    <div class="radio-group">
      <div class="inline" v-for="option of options" v-bind:key="option.id">
        <input
          type="radio"
          name="selector"
          :checked="option.selected"
          :id="option.id"
          @change="onSelect(option)"
        />
        <label v-bind:for="option.id">{{ option.text }}</label>
      </div>
      <!-- <input type="radio" id="option-two" name="selector" />
      <label for="option-two">Two</label>
      <input type="radio" id="option-three" name="selector" />
      <label for="option-three">Three</label>-->
    </div>
  </div>
</template>

<script lang="ts">
export interface Option {
  text: string;
  id: string;
  selected: boolean;
}

export default {
  props: {
    options: Array as () => Option[],
  },
  methods: {
    onSelect(option: Option) {
      this.$emit("selected", option);
    },
  },
};
</script>

<style scoped lang="scss">
.wrapper {
  display: inline-flex;
  transition: box-shadow 0.3s ease-in-out;
}

.inline {
  display: inline-flex;
}

input[type="radio"] {
  position: absolute;
  visibility: hidden;
  display: none;
}

label {
  display: inline-block;
  cursor: pointer;
  padding: 14px 30px;
}

input[type="radio"]:hover + label {
  color: #111;
  border-radius: 9px;
  // background: darken($color-bg, 3%);
}

input[type="radio"]:checked + label {
  @include lowered();
  border-radius: 9px;
}

.radio-group {
  display: inline-block;
  margin: 8px;
  overflow: hidden;
}
</style>

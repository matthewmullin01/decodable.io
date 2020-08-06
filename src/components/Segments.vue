<template>
  <div class="wrapper raised-m">
    <div class="radio-group">
      <div class="inline" v-for="option of options" v-bind:key="option.id">
        <input
          thisdoesnothing="nada"
          type="radio"
          name="option"
          :checked="option"
          :id="option"
          @change="onSelect(option)"
        />
        <label v-bind:for="option">{{ option }}</label>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    options: Array as () => string[],
    selected: String,
  },
  methods: {
    onSelect(option: string) {
      this.$emit("update:selected", option);
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
  color: #111;
}

.radio-group {
  display: inline-block;
  margin: 8px;
  overflow: hidden;
}
</style>

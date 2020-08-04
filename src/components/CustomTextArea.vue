<template>
  <div class="textarea-wrapper lowered-m">
    <textarea rows="20"></textarea>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  components: {},
})
export default class CustomTextArea extends Vue {}
</script>

<style scoped lang="scss">
.textarea-wrapper {
  padding: 20px;
  background-color: white;
}

textarea {
  width: 100%;
  outline: none;
  resize: none;
  border: none;
  background-color: white;
}
</style>

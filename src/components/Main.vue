<template>
  <div class="container">
    <div class="text-area-wrapper raised-m">
      <CustomTextArea class="CustomTextArea flex-6" />
      <ControlPanel class="flex-3" />
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import HeroButton from "./HeroButton.vue";
import Button from "./Button.vue";
import CustomTextArea from "./CustomTextArea.vue";
import ControlPanel from "./ControlPanel.vue";

@Options({
  components: {
    HeroButton,
    Button,
    CustomTextArea,
    ControlPanel,
  },
})
export default class Main extends Vue {}
</script>

<style scoped lang="scss">
.container {
  margin-top: 60px;
}

.text-area-wrapper {
  display: flex;
  padding: 40px 20px;
  .CustomTextArea {
    margin: auto 10px;
  }
}
</style>

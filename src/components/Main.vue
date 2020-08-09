<template>
  <div>
    <div class="text-area-wrapper">
      <CustomTextArea class="CustomTextArea" />
    </div>

    <div class="about-wrapper">
      <About id="about" class="About" />
    </div>

    <div class="security-wrapper">
      <Security id="security" class="Security" />
    </div>

    <div class="learn-more-wrapper">
      <LearnMore id="learn" class="LearnMore" />
    </div>
  </div>
</template>

<script lang="ts">
import CustomTextArea from "./CustomTextArea.vue";
import About from "./About.vue";
import Security from "./Security.vue";
import LearnMore from "./LearnMore.vue";

export default {
  components: {
    LearnMore,
    Security,
    About,
    CustomTextArea,
  },
};
</script>

<style scoped lang="scss">
.text-area-wrapper {
  margin-top: 110px;
}

.about-wrapper {
  margin-top: 250px;
  background: #f5f5f5;
}

.security-wrapper {
  background: #4e4e4e;
}
</style>

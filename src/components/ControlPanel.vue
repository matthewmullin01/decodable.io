<template>
  <div>
    <Toggle label="Live Mode" v-model:value="isLiveMode"></Toggle>
    <Toggle label="Secure Mode" v-model:value="isSecureMode"></Toggle>
    <Segments :options="encDecOptions" v-model:selected="selectedEncDecOption"></Segments>
    <Button id="convert-btn" class="raised-m">Convert</Button>
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
import Toggle from "./Toggle.vue";
import Segments from "./Segments.vue";
import Button from "./Button.vue";

export default {
  components: { Toggle, Segments, Button },
  setup() {
    const isLiveMode = ref(true);
    const isSecureMode = ref(true);

    const encDecOptions = ref<string[]>(["Encode", "Decode", "Auto"]);
    const selectedEncDecOption = ref("Auto");

    return {
      isLiveMode,
      isSecureMode,
      encDecOptions,
      selectedEncDecOption,
    };
  },
};
</script>

<style scoped lang="scss">
.panel-el {
  display: flex;
  margin: auto 20px 20px 20px;
  padding: 0.8em;
}

#convert-btn {
  margin-top: 100px;
}
</style>

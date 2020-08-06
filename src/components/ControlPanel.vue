<template>
  <div>
    <Toggle label="Live Mode" v-model:value="isLiveMode"></Toggle>
    <Toggle label="Secure Mode" v-model:value="isSecureMode"></Toggle>
    <Segments :options="encDecOptions" v-model:selected="encDecOptions.selected"></Segments>
    <div class="panel-el raised-m">Enable Secure Mode</div>
    <div class="panel-el raised-m">Decode Encode -Auto-</div>
    <div></div>
    <div class="panel-el raised-m">Convert</div>
  </div>
</template>

<script lang="ts">
// import { defineComponent } from "vue";
import { ref } from "vue";
import Toggle from "./Toggle.vue";
import Segments, { Option } from "./Segments.vue";

export default {
  components: { Toggle, Segments },
  setup() {
    const isLiveMode = ref(true);
    const isSecureMode = ref(true);

    const encDecOptions = ref<Option[]>([
      { text: "Encode", id: "encode", selected: false },
      { text: "Decode", id: "decode", selected: false },
      { text: "Auto", id: "auto", selected: true },
    ]);

    setInterval(() => {
      console.log(encDecOptions.value.find((q) => q.selected)?.text);
    }, 2000);

    return {
      isLiveMode,
      isSecureMode,
      encDecOptions,
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
</style>

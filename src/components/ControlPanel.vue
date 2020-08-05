<template>
  <div>
    <Toggle label="Live Mode" v-model:value="isLiveMode"></Toggle>
    <Toggle label="Secure Mode" v-model:value="isSecureMode"></Toggle>
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

export default {
  components: { Toggle },
  setup() {
    const isLiveMode = ref(true);
    const isSecureMode = ref(true);

    return {
      isLiveMode,
      isSecureMode,
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

<template>
  <div>
    <Toggle label="Live Mode" v-on:toggle="onLiveToggle"></Toggle>
    <Toggle label="Secure Mode" v-on:toggle="onLiveToggle"></Toggle>
    <div class="panel-el raised-m">Enable Secure Mode</div>
    <div class="panel-el raised-m">Decode Encode -Auto-</div>
    <div></div>
    <div class="panel-el raised-m">Convert</div>
  </div>
</template>

<script lang="ts">
// import { Options, Vue } from "vue-class-component";

import { defineComponent } from "vue";
import Toggle from "./Toggle.vue";

const ControlPanel = defineComponent({
  components: {
    Toggle,
  },
  methods: {
    onLiveToggle: (checked: boolean) => {
      console.log({ checked });
    },
  },
});

export default ControlPanel;
</script>

<style scoped lang="scss">
.panel-el {
  display: flex;
  margin: auto 20px 20px 20px;
  padding: 0.8em;
}
</style>

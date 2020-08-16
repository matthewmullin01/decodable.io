<template>
  <div class="text-section-wrapper wrapper-light container">
    <h2>About</h2>

    <p>
      <b>decod'r is built to help developers quickly and securely decode base64 encoded strings</b>
      <br />
      <br />All encoding and decoding is done locally on your machine so no data is ever sent to a
      server. In fact we don't use any personal data storage severs. decod'r is built using modern
      tooling to ensure great reliability and high performance.
      <br />
      <br />We have also added support for partial decoding as it is very common to have encoded
      data together with plain text, a la
      <a
        href="https://kubernetes.io/docs/concepts/configuration/secret/#decoding-a-secret"
      >Kubernetes secrets</a>. Give it a try - simply paste in partially encoded
      text and have a look at the output.
    </p>
  </div>
</template>

<script lang="ts">
export default {};
</script>

<style scoped lang="scss">
.text-section-wrapper h2 {
  color: $color-text-primary;
}
</style>

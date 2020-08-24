<template>
  <div class="text-section-wrapper wrapper-light container">
    <h2>Learn About Encoding</h2>

    <p>
      Base64 is a way to encode any binary data using only
      <i>A-Z, a-z and 0-9</i>. It gets it's name from
      the total number of characters it uses -
      <i>64 from the 26 * 2 letters and the 10 digits</i>. It
      converts all punctuation and whitespace to a more simple structure which often can prevent
      any issues when parsing data.
      <br />
      <br />The main purpose is to make it so the data can be represented purely as text as there
      area number of situations in which binary data is not supported. Older email standards are
      one such example where binary data is not allowed. Images and files are often
      encoded first before sending it over the wire too, but these day it is more as a convenient
      standard than a hard requirement.
      <br />
      <br />It is also commonly used as a way to validate hashed outputs. The hashed output can
      be converted to a Base64 string where it becomes much easier to display the
      hash, especially when you are comparing a checksum for integrity. Hashes are so often
      displayed in Base64 that many people incorrectly mistake Base64 itself as a hash.
      <br />
      <br />Learn more about Base64 on
      <a href="https://en.wikipedia.org/wiki/Base64">Wikipedia</a>.
    </p>
  </div>
</template>

<script lang="ts">
export default {
  components: {},
};
</script>

<style scoped lang="scss">
.text-section-wrapper h2 {
  color: $color-text-primary;
}
</style>

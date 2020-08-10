<template>
  <div class="text-section-wrapper container">
    <h2>Security</h2>

    <ul>
      <li>No data servers</li>
      <li>All computation handled on device</li>
      <li>Fully offline capable</li>
    </ul>
    <br />
    <p>
      decod'r was designed with security as the number one priority. All encoding and
      decoding is completely managed on device, so nothing you enter ever leaves this site.
      We do not store any information you provide other than standard non-identifiable
      analytics data to help improve our site to better fit your needs.
      <br />
      <br />We have followed modern
      <a href="https://web.dev/progressive-web-apps/">Progressive Web App</a> standards to ensure
      decod'r is fully available offline once the page has been cached initially.
    </p>
  </div>
</template>

<script lang="ts">
export default {
  components: {},
};
</script>

<style scoped lang="scss">
.text-section-wrapper {
  color: $color-text-light;
  max-width: 660px;
}
.text-section-wrapper p {
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  max-width: 600px;
}
.text-section-wrapper h2 {
  color: lighten($color-text-light, 10);
}

ul {
  display: flex;
  justify-content: space-between;
  align-items: center;
  // width: 112%;
  margin: unset;
  // margin-left: -4%;
  padding: unset;
}

ul > li {
  display: block;
  list-style-type: none;
  font-weight: bold;
}
</style>

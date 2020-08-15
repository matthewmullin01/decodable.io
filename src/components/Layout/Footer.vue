<template>
  <footer>
    <div class="wrapper container">
      <div class="app-icon">
        <a href="#home">decod'r</a>
      </div>

      <small>Matthew Mullin © {{ new Date().getFullYear() }}</small>

      <div>
        <link href="https://fonts.googleapis.com/css?family=Cookie" rel="stylesheet" />
        <a class="bmc-button" target="_blank" href="https://www.buymeacoffee.com/matthewmullin">
          <img
            src="https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg"
            alt="Buy me a coffee"
          />
          <span style="margin-left:5px;font-size:20px !important;">Buy me a coffee</span>
        </a>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
export default {};
</script>

<style scoped lang="scss">
footer {
  background: darken($color-text-primary, 20);
  color: $color-text-light;
}

.wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.2em 0;
}

.app-icon a {
  color: $color-text-light;
}
</style>

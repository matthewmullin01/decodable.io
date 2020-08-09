<template>
  <footer>
    <div class="wrapper container">
      <div class="app-icon">
        <a href="#home">decod'd</a>
      </div>

      <small>Matthew Mullin © {{ new Date().getFullYear() }}</small>

      <div>
        <a>Donate</a>
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

<template>
  <footer>
    <div class="wrapper container">
      <div class="app-icon">
        <a href="#home">Decodable</a>
      </div>

      <small>Matthew Mullin © {{ new Date().getFullYear() }}</small>

      <div>
        <a href="https://ko-fi.com/J3J3228E5" target="_blank">
          <img
            height="36"
            style="border: 0px; height: 36px"
            src="https://cdn.ko-fi.com/cdn/kofi4.png?v=2"
            border="0"
            alt="Buy Me a Coffee at ko-fi.com"
          />
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

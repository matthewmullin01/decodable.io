<template>
  <header class="container">
    <nav>
      <div class="app-icon">
        <a href="#home">decodable.io</a>
      </div>

      <div class="primary-links">
        <a href="#about" class="active">About</a>
        <a href="#security">Security</a>
        <a href="#learn">Learn</a>
      </div>

      <div class="end-links">
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
    </nav>
  </header>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  components: {},
})
export default class Header extends Vue {}
</script>

<style scoped lang="scss">
nav {
  margin: 2em auto;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  align-items: center;
}

.primary-links {
  justify-self: center;
}

.end-links {
  justify-self: end;
}

.app-icon {
  justify-self: start;
}

.app-icon a {
  color: $color-text-dark;
  padding: 0px;
}

/* Style the links inside the navigation bar */
nav a {
  color: $color-text-primary;
  padding: 14px 16px;
  text-decoration: none;
}

/* Change the color of links on hover */
nav a:hover {
  color: black;
}

/* Add an active class to highlight the current page */
nav a.active {
  color: black;
  font-weight: bold;
}

@media (max-width: 500px) {
  nav {
    grid-template-columns: 1fr 1fr;
  }
  .primary-links {
    display: none;
  }
}
</style>

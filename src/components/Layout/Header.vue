<template>
  <header class="container">
    <nav class="topnav" id="myTopnav">
      <div class="app-icon raised-m">
        <a href="#home">B64</a>
      </div>

      <a href="#about" class="active">About</a>
      <a href="#contact">Contact</a>
      <a href="javascript:void(0);" class="icon" onclick="myFunction()">
        <i class="fa fa-bars"></i>
      </a>
    </nav>
  </header>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  components: {},
})
export default class Header extends Vue {
  myFunction = () => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const x = document.getElementById("myTopnav")!;
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  };
}
</script>

<style scoped lang="scss">
header {
  display: flex;
  align-items: center;
}

.app-icon {
  padding: 20px;
  margin: 50px;
  font-weight: bold;
  font-size: 1.2em;
}

/* Add a black background color to the top navigation */
.topnav {
  overflow: hidden;
  display: flex;
  align-items: center;
}

/* Style the links inside the navigation bar */
.topnav a {
  float: left;
  color: #444;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

/* Change the color of links on hover */
.topnav a:hover {
  // background-color: #ddd;
  color: black;
  font-weight: bold;
}

/* Add an active class to highlight the current page */
.topnav a.active {
  color: black;
  font-weight: bold;
}

/* Hide the link that should open and close the topnav on small screens */
.topnav .icon {
  display: none;
}

/* When the screen is less than 600 pixels wide, hide all links, except for the first one ("Home").
Show the link that contains should open and close the topnav (.icon) */
@media screen and (max-width: 600px) {
  .topnav a:not(:first-child) {
    display: none;
  }
  .topnav a.icon {
    float: right;
    display: block;
  }
}

/* The "responsive" class is added to the topnav with JavaScript when the user clicks on the icon.
 This class makes the topnav look good on small screens (display the links vertically instead of
 horizontally) */
@media screen and (max-width: 600px) {
  .topnav.responsive {
    position: relative;
  }
  .topnav.responsive a.icon {
    position: absolute;
    right: 0;
    top: 0;
  }
  .topnav.responsive a {
    float: none;
    display: block;
    text-align: left;
  }
}
</style>

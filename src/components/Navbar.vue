<template>
  <div class="navbar">
    <div class="nav-wrapper">
      <transition></transition>
      <div class="nav-menu" id="nav__menu">
        <router-link to="/" class="nav-link  inline-block">Home</router-link>
        <router-link to="/works" class="nav-link  inline-block">Works</router-link>
        <router-link to="/contact" class="nav-link  inline-block">Contact</router-link>
      </div>
      <div class="nav-button" @click="toggleDrawer()">
        <img src="https://res.cloudinary.com/adinell/image/upload/v1538947356/drawer.svg" alt=""
          class="nav-icon" />
      </div>
    </div>
    <router-link to="/">
      <img src="https://res.cloudinary.com/adinell/image/upload/v1538947263/portfolio%20data/logo.png " alt=""
        class="image-3" />
    </router-link>
  </div>
</template>

<script>
import * as tram from "tram";
export default {
  name: "Navbar",
  data() {
    return {
      isMenuOpen: false
    };
  },
  methods: {
    toggleDrawer: function() {
      this.isMenuOpen ? this.closeDrawer() : this.openDrawer();
      this.isMenuOpen = !this.isMenuOpen;
    },
    openDrawer: function() {
      const menu = $("#nav__menu");
      menu.css("display", "block");
      tram(menu)
        .add("transform 500ms ease")
        .start({
          scaleX: 1,
          scaleY: 1,
          scaleZ: 1
        });
      tram($(".nav-button"))
        .add("transform 500ms ease")
        .add("border-radius 200ms ease")
        .start({
          rotateX: 9,
          rotateY: 0,
          rotateZ: 90
        });
      tram($(".nav-icon"))
        .add("transform 500ms ease")
        .start({
          rotateX: 9,
          rotateY: 0,
          rotateZ: -45
        });
    },
    closeDrawer: function() {
      const menu = $("#nav__menu");
      tram(menu)
        .add("transform 500ms ease")
        .start({
          scaleX: 0.1,
          scaleY: 0.1,
          scaleZ: 1
        })
        .then(() => menu.css("display", "none"));
      tram($(".nav-button"))
        .add("border-radius 500ms")
        .add("transform 500ms ease")
        .start({
          rotateX: 9,
          rotateY: 0,
          rotateZ: 0
        });
      tram($(".nav-icon"))
        .add("transform 500ms ease")
        .start({
          rotateX: 9,
          rotateY: 0,
          rotateZ: 0
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.nav-menu {
  -webkit-transform: translate3d(0, 0, 0) scale3d(0.01, 0.01, 1) rotateX(0)
    rotateY(0) rotateZ(0) skew(0, 0);
  -moz-transform: translate3d(0, 0, 0) scale3d(0.01, 0.01, 1) rotateX(0)
    rotateY(0) rotateZ(0) skew(0, 0);
  -ms-transform: translate3d(0, 0, 0) scale3d(0.01, 0.01, 1) rotateX(0)
    rotateY(0) rotateZ(0) skew(0, 0);
  transform: translate3d(0, 0, 0) scale3d(0.01, 0.01, 1) rotateX(0) rotateY(0)
    rotateZ(0) skew(0, 0);
}

.nav-button {
  transform-style: preserve-3d;
}
</style>

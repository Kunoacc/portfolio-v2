<template>
  <div id="app">
    <Loader></Loader>
    <Navbar v-once></Navbar>
    <router-view/>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import Loader from "./components/Loader";
import { default as particle } from "particle.js";
export default {
  components: {
    Navbar, Loader
  },
  created() {
    // this.initializeParticle();
  },
  methods: {
    initializeParticle: function() {
      particle.load("app", "./assets/particle.json", () => {
        console.log("particle loaded");
      });
    }
  }
};
</script>

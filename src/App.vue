<template>
  <div id="app">
    <Navbar></Navbar>
    <router-view/>
  </div>
</template>

<script>
  import Navbar from './components/Navbar'
  import {default as particle} from 'particle.js'
  export default {
    components: {
      Navbar
    },
    created () {
      this.initializeParticle();
    },
    methods: {
      initializeParticle: function () {
        particle.load('app', './assets/particle.json', () => {
          console.log('particle loaded')
        })
      }
    }
  }
</script>

<template>
  <div id="app">
    <Loader></Loader>
    <Navbar></Navbar>
    <transition name="fade">
      <router-view />
    </transition>
    <Footer></Footer>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Loader from './components/Loader'
export default {
  components: {
    Navbar,
    Footer,
    Loader
  },
  data () {
    return {
      shouldShowLoader: this.$route.meta.shouldShowLoader
    }
  },
  created () {
    setTimeout(() => (this.$route.meta.shouldShowLoader = false), 5000)
  }
}
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
  .fade-leave-to

  /* .fade-leave-active below version 2.1.8 */
 {
  opacity: 0;
}
</style>

<template>
  <div id="app">
    <Loader></Loader>
    <Navbar v-once></Navbar>
    <router-view/>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
export default {
  components: {
    Navbar
}
};
</script>

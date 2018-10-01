<template>
    <div>
        <Loader></Loader>
        <div id="Home" class="section hero-section">
            <div class="container">
                <div class="hero-right">
                    <div class="div-block-2"></div>
                    <ul class="unordered-list w-list-unstyled">
                        <li class="list-item">UI/UX +</li>
                        <li class="list-item-2">Web Development +</li>
                        <li class="list-item-3">Mobile Development +</li>
                    </ul>
                </div>
                <div class="hero-left">
                    <div class="horizontal-bar"></div>
                    <h1 class="hero-title">Hi, My name is Nelson. I&#x27;m a Full-stack Developer from Nigeria.</h1>
                </div>
            </div>
        </div>
        <About></About>
        <div id="Clients" class="section clients">
            <div class="container">
                <h2 class="section-title">Clients</h2>
                <div class="w-dyn-list">
                    <div class="client-wrapper w-dyn-items">
                        <div class="collection-item w-dyn-item"><img width="383" src="https://uploads-ssl.webflow.com/5bac13e268e04c4447f676f3/5bb1f1acca2e96f990db0d76_Asset 16.svg"
                                alt="Circle Church Nigeria" /></div>
                        <div class="collection-item w-dyn-item"><img width="383" src="https://uploads-ssl.webflow.com/5bac13e268e04c4447f676f3/5bb1eff1ca2e965237db0adb_logo.svg"
                                alt="Cool FM Nigeria" /></div>
                    </div>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
// @ is an alias to /src
import Loader from "@/components/Loader.vue";
import Footer from "@/components/Footer.vue";
import About from "@/components/About.vue";
import { newScript } from "../../public/main.js";

export default {
  name: "home",
  components: {
    Loader,
    Footer,
    About
  },
  data() {
    return {
      
    };
  }
};
</script>

<style scoped>
.div-block-2 {
  background-image: url("../assets/home_banner.jpg");
}

.clients-list {
  padding: 30px 0;
}
</style>
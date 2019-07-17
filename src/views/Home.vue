<template>
    <div>
        <div id="Home" class="section hero-section">
            <div class="container">
                <div class="hero-right">
                    <div class="div-block-2"></div>
                    <ul class="unordered-list  list-unstyled">
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
                <div class=" dyn-list">
                    <div class="client-wrapper project-items">
                        <div class="collection-item project-item"><img :src="ccLogo"
                                alt="Circle Church Nigeria" /></div>
                        <div class="collection-item project-item"><img :src="coolLogo"
                                alt="Cool FM Nigeria" /></div>
                        <div class="collection-item project-item"><img :src="accessLogo"
                                alt="Access Bank" /></div>
                        <div class="collection-item project-item"><img :src="affLogo"
                                alt="African fintech foundry" /></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import About from "@/components/About.vue";

export default {
  name: "home",
  components: {
    About
  },
  computed: {
    accessLogo(){
      return require('@/assets/access.svg')
    },
    affLogo(){
      return require('@/assets/aff.svg')
    },
    coolLogo(){
      return require('@/assets/coolfm.svg')
    },
    ccLogo(){
      return require('@/assets/cclogo.svg')
    },
  }
};
</script>

<style scoped>
.div-block-2 {
  background-image: url("https://res.cloudinary.com/adinell/image/upload/c_scale,h_1080,w_1900/v1538924168/portfolio%20data/home_banner.jpg");
}

.clients-list {
  padding: 30px 0;
}

@media (max-width: 479px) {
  .section-title {
    font-size: 30px;
  }
}

.section-title {
  margin-bottom: 1rem;
}
</style>

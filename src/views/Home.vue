<template>
    <div>
        <Loader v-once></Loader>
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
        <div class="section">
            <div class="container">
                <h2 class="section-title about-text"><strong class="bold-text">I&#x27;m a creative Full-Stack Developer
                        currently living and working in Abuja. I craft applications for web &amp; mobile. I built part
                        of
                        (and maintained) </strong><a href="https://printanything.ng/" target="_blank" class="link"><strong
                            class="bold-text-2">PrintAnything Nigeria</strong></a><strong class="bold-text-3">. I am
                        currently a Full-Time freelancer, building products and doing consultancy work for awesome
                        people.</strong></h2>
                <h2 data-w-id="4551bce0-0464-6d27-6c58-edc1ea67af06" style="height:0PX;display:none;opacity:0" class="section-title about-text more-bio"><strong
                        class="bold-text">I mostly write </strong><span class="span"><strong class="bold-text">PHP
                        </strong></span><strong class="bold-text">(with </strong><span class="span"><strong class="bold-text">Laravel</strong></span><strong
                        class="bold-text">). I&#x27;ve picked up a couple of other frameworks and Languages but Laravel
                        is
                        by far the framework i&#x27;m most comfortable with.<br /><br />I&#x27;ve built mobile apps
                        with
                    </strong><span class="span"><strong class="bold-text">Nativescript</strong></span><strong class="bold-text">
                        and recently completed the </strong><span class="span"><strong class="bold-text">Flutter
                        </strong></span><strong class="bold-text">+ </strong><span class="span"><strong class="bold-text">Dart
                        </strong></span><strong class="bold-text">courses on </strong><span>Udemy</span><strong class="bold-text">
                        and i&#x27;m
                        looking forward to working with those very soon. I&#x27;ve also built API&#x27;s with </strong><span
                        class="span"><strong class="bold-text">Lumen </strong></span><strong class="bold-text">and
                    </strong><span class="span"><strong class="bold-text">Laravel</strong></span><strong class="bold-text">,
                    </strong><span class="span"><strong class="bold-text">Express</strong></span><strong class="bold-text">,
                    </strong><span class="span"><strong class="bold-text">Strapi </strong></span><strong class="bold-text">and
                    </strong><span class="span"><strong class="bold-text">Koa</strong></span><strong class="bold-text">.<br /><br />My
                    </strong><span class="span"><strong class="bold-text">HTML</strong></span><strong class="bold-text">
                        &amp; </strong><span class="span"><strong class="bold-text">CSS</strong></span><strong class="bold-text">
                        were average enough and i can build frontend applications with </strong><span class="span"><strong
                            class="bold-text">Vue.js</strong></span><strong class="bold-text"> (Like this website).</strong></h2>
                <div class="text-block-3"><a href="#" data-w-id="2bc71c17-fee8-1bfa-1c12-39ec3c00c8fb" class="reveal-bio">Read
                        More...</a></div>
            </div>
        </div>
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
import HelloWorld from "@/components/HelloWorld.vue";
import Loader from "@/components/Loader.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "home",
  components: {
    HelloWorld,
    Loader,
    Footer
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
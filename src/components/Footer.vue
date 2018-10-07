<template>
    <div class="footer">
        <div class="container footer-container">
            <div class="footer-item">
                <div class="footer-item-title">CONTACT ME</div>
                <div class="footer-item-body"><a href="mailto:nelson@nelsonatuonwu.me?subject=Hello%20From%20The%20Website"
                        class="link-3">nelson@nelsonatuonwu.me</a></div>
            </div>
            <div class="footer-item center">
                <div class="footer-item-title">REACH OUT</div>
                <div class="footer-social">
                    <img src="https://uploads-ssl.webflow.com/5bac02ca50e382f07f511b29/5bad225b219df68e6e0475be_001-twitter-logo-silhouette.svg"
                        width="40" alt="" class="footer-social-item" @click="navigator('https://twitter.com/@blvckcoder')"/>
                    <img src="https://uploads-ssl.webflow.com/5bac02ca50e382f07f511b29/5bad220b4946f4a649b1a50a_github.svg"
                        width="40" alt="" class="footer-social-item" @click="navigator('https://github.com/kunoacc')"/>
                    <img src="https://uploads-ssl.webflow.com/5bac02ca50e382f07f511b29/5bad76eba52b555bbf3ae813_linkedin-logo.svg"
                        width="40" alt="" class="footer-social-item" @click="navigator('https://linkedin.com/in/nelsonatuonwu')"/>
                </div>
            </div>
            <div class="footer-item">
                <div class="footer-item-title">COPYRIGHT</div>
                <div class="footer-item-body">© Nelson Atuonwu, {{year}}.</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      year: new Date().getFullYear()
    };
  },
  methods: {
    navigator: function(url) {
      window.open(url, "_blank");
    }
  }
};
</script>

<style scoped>
.footer-social-item {
  cursor: pointer;
}
</style>

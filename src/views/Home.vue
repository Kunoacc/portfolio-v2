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
            <div></div>
        </div>
        <div id="Clients" class="section clients">
            <div class="container">
                <h2 class="section-title">I've worked with...</h2>
                <div class="w-dyn-list clients-list">
                    <div class="client-wrapper w-dyn-items">
                        <div class="collection-item w-dyn-item"><img width="383"
                                                                     src="https://res.cloudinary.com/adinell/image/upload/v1538243942/portfolio%20data/coolfm.svg"
                                                                     sizes="(max-width: 479px) 44vw, (max-width: 991px) 18vw, 15vw"
                                                                     srcset="https://res.cloudinary.com/adinell/image/upload/v1538243942/portfolio%20data/coolfm.svg 500w, https://res.cloudinary.com/adinell/image/upload/v1538243942/portfolio%20data/coolfm.svg 1080w, https://res.cloudinary.com/adinell/image/upload/v1538243942/portfolio%20data/coolfm.svg 1300w"/>
                        </div>
                        <div class="collection-item w-dyn-item"><img width="383"
                                                                     src="http://uploads-ssl.webflow.com/5bac13e268e04c4447f676f3/5bacd393a090776b706ac909_1538053011038-image18.jpg"
                                                                     sizes="(max-width: 479px) 44vw, (max-width: 991px) 18vw, 15vw"
                                                                     srcset="https://uploads-ssl.webflow.com/5bac13e268e04c4447f676f3/5bacd393a090776b706ac909_1538053011038-image18-p-500.jpeg 500w, https://uploads-ssl.webflow.com/5bac13e268e04c4447f676f3/5bacd393a090776b706ac909_1538053011038-image18-p-800.jpeg 800w, https://uploads-ssl.webflow.com/5bac13e268e04c4447f676f3/5bacd393a090776b706ac909_1538053011038-image18-p-1080.jpeg 1080w, https://uploads-ssl.webflow.com/5bac13e268e04c4447f676f3/5bacd393a090776b706ac909_1538053011038-image18.jpg 1300w"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  // @ is an alias to /src
  import HelloWorld from '@/components/HelloWorld.vue'
  import Loader from '@/components/Loader.vue'

  export default {
    name: 'home',
    components: {
      HelloWorld, Loader
    }
  }
</script>

<style scoped>
    .div-block-2 {
        background-image: url("../assets/home_banner.jpg");
    }

    .clients-list{
        padding: 30px 0;
    }
</style>

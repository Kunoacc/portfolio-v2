<template>
  <div>
    <div id="Works" class="section">
      <div class="container">
        <h2 class="section-title">My Works</h2>
        <div class="collection-list-wrapper w-dyn-list">
          <div class="w-dyn-items">
            <img src="@/assets/loader.svg" alt="" v-if="isLoading" class="img-loader" />
            <div class="project w-dyn-item" v-for="work in works" v-if="!isLoading">
              <div :style="{'background-image': 'url('+work.data.image_main.url+')'}" class="project-image">
                <div :style="{'background-color': work.data.overlay_color}" class="project-image-cover"></div>
                <div class="project-number-holder">
                  <div class="project-number">{{work.uid}}</div>
                  <div class="project-type">{{work.data.project_type}}</div>
                </div>
              </div>
              <div class="project-preview">
                <div class="project-content">
                  <h3 class="heading">{{work.data.name}}</h3>
                  <p class="project-description">{{work.data.description}}</p><a :href="work.data.link.url" class="project-link"
                    target="_blank">View Project -&gt;</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VanillaTilt from 'vanilla-tilt'
export default {
  name: 'Works',
  data () {
    return {
      works: '',
      isLoading: true
    }
  },
  mounted () {
    this.getWorks().then(() => {
      if (!this.isOnMobile()) {
        this.initTilt()
      }
    })
  },
  methods: {
    getWorks: function () {
      return new Promise(resolve => {
        this.$prismic.client
          .query(this.$prismic.Predicates.at('document.type', 'project'), {
            orderings: '[my.project.uid]'
          })
          .then(response => {
            this.isLoading = false
            this.works = response.results
            resolve()
          })
      })
    },
    initTilt: function () {
      const el = document.querySelectorAll('.project-content')
      VanillaTilt.init(el)
    },
    isOnMobile: function () {
      return 'ontouchstart' in document.documentElement
    }
  }
}
</script>

<style lang="scss" scoped>
@media screen and (max-width: 479px) {
  .section {
    padding: 50px 0px;
  }

  .section-title {
    font-size: 30px;
  }
}

.project-content {
  transform-style: preserve-3d;
}

.project-description {
  transform: translateZ(20px);
}

.img-loader {
  text-align: center;
  padding: 50px 0px;
  margin: auto;
  width: 35px;
}

.w-dyn-items {
  text-align: center;
}

.project {
  text-align: left;
}
</style>

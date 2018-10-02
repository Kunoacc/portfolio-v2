<template>
    <div id="Works" class="section">
        <div class="container">
            <h2 class="section-title">My Works</h2>
            <div class="collection-list-wrapper w-dyn-list">
                <div class="w-dyn-items">
                    <div class="project w-dyn-item" v-for="work in works">
                        <div :style="{'background-image': 'url('+work.data.image_main.url+')'}"
                             class="project-image">
                            <div :style="{'background-color': work.data.overlay_color}" class="project-image-cover"></div>
                            <div class="project-number-holder">
                                <div class="project-number">{{work.uid}}</div>
                                <div class="project-type">{{work.data.project_type}}</div>
                            </div>
                        </div>
                        <div class="project-preview">
                            <div class="project-content">
                                <h3 class="heading">{{work.data.name}}</h3>
                                <p class="project-description">{{work.data.description}}</p><a :href="work.data.link.url"
                                                                                           class="project-link" target="_blank">View Project -&gt;</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Works',
  data () {
    return {
      works: ''
    }
  },
  created () {
    this.getWorks()
  },
  methods: {
    getWorks: function () {
      this.$prismic.client.query(
        this.$prismic.Predicates.at('document.type', 'project'),
        { orderings: '[my.project.uid]' }
      ).then(response => {
        this.works = response.results
      })
    }
  }
}
</script>

<style scoped>

</style>

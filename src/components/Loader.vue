<template>
    <div class="loader">
        <div class="loader-text-holder">
            <div style="opacity:0" class="loader-text" id="first">Sleep.
            </div>
            <div style="opacity:0" class="loader-text" id="second">Eat.</div>
            <div style="opacity:0" class="loader-text" id="third">Code.
            </div>
            <div style="opacity:0" class="loader-text" id="fourth">Repeat.</div>
        </div>
    </div>
</template>

<script>
import * as tram from 'tram'
export default {
  name: 'Loader',
  mounted () {
    this.animateLoader()
  },
  methods: {
    animateLoader: function () {
      const firstText = $('#first')
      const secondText = $('#second')
      const thirdText = $('#third')
      const fourthText = $('#fourth')
      const loader = $('.loader')
      tram(firstText)
        .add('transform 1s ease')
        .start({
          opacity: 1
        })
        .wait(500)
        .then(() => {
          tram(secondText)
            .add('transform 1s ease 1s')
            .start({
              opacity: 1
            })
            .wait(500)
            .then(() => {
              tram(thirdText)
                .add('transform 1s ease 2s')
                .start({
                  opacity: 1
                })
                .wait(500)
                .then(() => {
                  tram(fourthText)
                    .add('transform 1500ms ease 3s')
                    .start({
                      opacity: 1
                    })
                    .wait(500)
                    .then(() => {
                      tram(loader)
                        .add('transform 1500ms ease')
                        .start({
                          opacity: 0
                        })
                        .then(() => loader.css('display', 'none'))
                    })
                })
            })
        })
    }
  }
}
</script>

<style scoped>
</style>

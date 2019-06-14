<template>
  <div class="section">
    <div class="container">
      <h2 class="section-title about-text short-bio">
        <strong class="bold-text">
          I&#x27;m a creative Full-Stack Developer
          currently living and working in Abuja. I craft applications for web &amp; mobile.
        </strong>
        <strong class="bold-text-3">
          I am
          currently a Senior Frontend Developer at
          <strong class="bold-text-2 link">Desevens Digital</strong>
          , building breathtaking proucts one line of code at a time.
        </strong>
      </h2>
      <h2 style="height:0PX;display:none;opacity:0" class="section-title about-text more-bio">
        <strong class="bold-text">I mostly write </strong>
        <span class="span"><strong class="bold-text">JavaScript </strong></span>
        <strong class="bold-text">(with </strong>
        <span class="span"><strong class="bold-text">Node.js</strong></span>
        <strong class="bold-text">
          ) these days. I&#x27;m super comfortable with
          <span class="span"><strong class="bold-text"> Laravel </strong></span>
          too and have worked with if for majority of my
          years as a Software Engineer.
          <br /><br />
          I&#x27;ve built mobile apps with
        </strong>
        <span class="span"><strong class="bold-text">Nativescript</strong></span>
        <strong class="bold-text"> , completed </strong>
        <span class="span"><strong class="bold-text">Flutter </strong></span>
        <strong class="bold-text">+ </strong>
        <span class="span"><strong class="bold-text">Dart </strong></span>
        <strong class="bold-text">courses on </strong>
        <span>Udemy</span>
        <strong class="bold-text">
          and proceeded to build beautiful apps with Flutter too. I&#x27;ve also built API&#x27;s with
        </strong>
        <span class="span"><strong class="bold-text">Laravel</strong></span>
        <strong class="bold-text">, </strong>
        <span class="span"><strong class="bold-text">Express</strong></span>
        <strong class="bold-text">, </strong>
        <span class="span"><strong class="bold-text">Strapi </strong></span>
        <strong class="bold-text">, </strong>
        <span class="span"><strong class="bold-text">Adonis.js </strong></span>
        <strong class="bold-text">and </strong>
        <span class="span"><strong class="bold-text">Koa</strong></span>
        <strong class="bold-text">.<br /><br />My
        </strong>
        <span class="span">
          <strong class="bold-text">HTML</strong>
        </span>
        <strong class="bold-text"> &amp; </strong>
        <span class="span">
          <strong class="bold-text">CSS</strong>
        </span>
        <strong class="bold-text">
          are pretty solid, i'm also a big fan of and can build frontends with
        </strong>
        <span class="span">
          <strong class="bold-text">Vue.js</strong>
        </span>
        <strong class="bold-text"> (Like this website) &amp; </strong>
        <span class="span">
          <strong class="bold-text">React</strong>
        </span>
        <strong class="bold-text">.</strong>
      </h2>
      <div class="text-block-3" @click="toggleBio()">
        <a href="javascript:" class="reveal-bio">{{reveal_text}}</a>
      </div>
    </div>
  </div>
</template>

<script>
  import * as scroll from 'smoothscroll'
  import * as tram from 'tram'
  export default {
    name: 'About',
    data() {
      return {
        reveal_text: 'Read More ...',
        is_revealed: false
      }
    },
    methods: {
      toggleBio: function () {
        this.is_revealed ? this.collapseBio() : this.revealBio()
        this.is_revealed = !this.is_revealed
      },
      revealBio: function () {
        const bio = $('.more-bio')
        bio.css('display', 'block')
        tram(bio)
          .add('transform 500ms ease')
          .start({
            height: '0%',
            opacity: 1
          })
        this.reveal_text = 'Collapse Bio ...'
        scroll(document.querySelector('.more-bio'))
      },
      collapseBio: function () {
        const bio = $('.more-bio')
        bio.css('display', 'block')
        tram(bio)
          .add('transform 500ms ease')
          .start({
            height: 0,
            opacity: 0
          })
          .then(() => bio.css('display', 'none'))
        this.reveal_text = 'Read More ...'
        scroll(document.querySelector('.short-bio'))
      }
    }
  }
</script>
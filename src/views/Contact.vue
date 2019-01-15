<template>
    <div id="Contact" class="section">
        <div class="container">
            <h1 class="section-title left-justified">Contact</h1>
        </div>
        <div class="container horizontal contact-container">
            <div class="form-block  form">
                <form id="email-form" name="email-form" data-name="Email Form" class="form" @submit="send($event)">
                    <h3 class="section-title left-justified">Hey There {{firstName}}</h3>
                    <div class="horizontal-bar lower-margin"></div>
                    <input type="text" class="text-field  input" maxlength="256" name="name" placeholder="Your Name"
                        id="name" v-model="name" required />
                    <input type="text" class="text-field  input" maxlength="256" name="email" placeholder="Your Email"
                        id="email" required v-model="email" />
                    <textarea id="message" name="message" placeholder="Your message..." maxlength="5000" v-model="message"
                        required class="text-field textarea  input"></textarea>
                    <input type="submit" :value="(isSending) ? 'Sending...' : 'Send'" class="submit-button  button"
                        :disabled="isSending" />
                </form>
                <div :class="(response.success) ? ' form-done' : ' form-fail'">
                    <transition name="fade">
                        <h4 v-if="response">{{response.message}}</h4>
                    </transition>
                </div>
            </div>
            <div class="social-wrapper">
                <div class="div-block-4">
                    <a href="https://github.com/kunoacc" class="social-link  inline-block">
                        <img src="https://uploads-ssl.webflow.com/5bac02ca50e382f07f511b29/5bad220b4946f4a649b1a50a_github.svg"
                            class="image" />
                        <div class="social-text-inline">GITHUB</div>
                    </a>
                    <a href="https://linkedin.com/in/nelsonatuonwu" class="social-link  inline-block">
                        <img src="https://uploads-ssl.webflow.com/5bac02ca50e382f07f511b29/5bad76eba52b555bbf3ae813_linkedin-logo.svg"
                            class="image" />
                        <div class="social-text-inline">LINKEDIN</div>
                    </a>
                    <a href="https://twitter.com/@blvckcoder" class="social-link  inline-block">
                        <img src="https://uploads-ssl.webflow.com/5bac02ca50e382f07f511b29/5bad225b219df68e6e0475be_001-twitter-logo-silhouette.svg"
                            class="image" />
                        <div class="social-text-inline">TWITTER</div>
                    </a>
                    <a href="https://dribbble.com/blvckcoder" class="social-link  inline-block">
                        <img src="https://uploads-ssl.webflow.com/5bac02ca50e382f07f511b29/5bad7646989edf7deffb598c_dribbble-logo.svg"
                            class="image" />
                        <div class="social-text-inline">DRIBBBLE</div>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Contact",
  data() {
    return {
      email: "",
      name: "",
      message: "",
      response: "",
      isSending: false
    };
  },
  methods: {
    validate: function() {
      return new Promise((resolve, reject) => {
        if (this.email === "" || this.name === "" || this.message === "") {
          reject("All fields are required");
        }
        resolve();
      });
    },
    send: function(event) {
      event.preventDefault();
      this.validate()
        .then(() => {
          this.isSending = true;
          var form = new FormData();
          form.append("inputEmail", this.email);
          form.append("inputName", this.name);
          form.append("inputMessage", this.message);

          axios
            .post("https://old.nelsonatuonwu.me/contact-form.php", form)
            .then(response => {
              this.isSending = false;
              this.response = response.data;
              //   this.clear()
              setTimeout(() => (this.response = ""), 5000);
            })
            .catch(err => {
              this.isSending = false;
              this.response = {
                success: false,
                message: "Something went wrong. Try again later"
              };
            });
        })
        .catch(err => {
          this.isSending = false;
          this.response = {
            success: false,
            message: err
          };
        });
    },
    clear: function() {
      setTimeout(() => {
        (this.name = "")((this.message = ""))((this.email = ""))(
          (this.response = "")
        );
      }, 5000);
    }
  },
  computed: {
    firstName: function() {
      return this.name.split(" ")[0];
    }
  }
};
</script>

<style scoped>
. form-done {
  color: rgb(17, 182, 17);
}

. form-fail {
  color: rgb(224, 30, 30);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease-out;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>

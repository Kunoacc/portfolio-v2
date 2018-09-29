<template>
    <div id="Contact" class="section">
        <div class="container">
            <h2 class="section-title left-justified">GET IN TOUCH</h2>
        </div>
        <div class="container horizontal contact-container">
            <div class="form-block w-form">
                <form id="email-form" name="email-form" data-name="Email Form" class="form">
                    <h1 class="section-title left-justified">Contact</h1>
                    <div class="horizontal-bar lower-margin"></div>
                    <input type="text" class="text-field w-input"
                           maxlength="256" name="name" data-name="Name" placeholder="Your Name" id="name"/><input
                        type="text"
                        class="text-field w-input" maxlength="256" name="email" data-name="Email"
                        placeholder="Your Email"
                        id="email" required=""/><textarea id="message" name="message" placeholder="Your message..."
                                                          maxlength="5000" data-name="message" required=""
                                                          class="text-field textarea w-input"></textarea><input
                        type="submit" value="Submit" data-wait="Please wait..." class="submit-button w-button"/>
                </form>
                <div class="w-form-done">
                    <div>Thank you! Your submission has been received!</div>
                </div>
                <div class="w-form-fail">
                    <div>Oops! Something went wrong while submitting the form.</div>
                </div>
            </div>
            <div class="social-wrapper">
                <div class="div-block-4"><a href="#" class="social-link w-inline-block"><img
                        src="https://uploads-ssl.webflow.com/5bac02ca50e382f07f511b29/5bad220b4946f4a649b1a50a_github.svg"
                        class="image"/>
                    <div class="social-text-inline">GITHUB</div>
                </a><a href="#" class="social-link w-inline-block"><img
                        src="https://uploads-ssl.webflow.com/5bac02ca50e382f07f511b29/5bad76eba52b555bbf3ae813_linkedin-logo.svg"
                        class="image"/>
                    <div class="social-text-inline">LINKEDIN</div>
                </a><a href="#" class="social-link w-inline-block"><img
                        src="https://uploads-ssl.webflow.com/5bac02ca50e382f07f511b29/5bad225b219df68e6e0475be_001-twitter-logo-silhouette.svg"
                        class="image"/>
                    <div class="social-text-inline">TWITTER</div>
                </a><a href="#" class="social-link w-inline-block"><img
                        src="https://uploads-ssl.webflow.com/5bac02ca50e382f07f511b29/5bad7646989edf7deffb598c_dribbble-logo.svg"
                        class="image"/>
                    <div class="social-text-inline">DRIBBBLE</div>
                </a></div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'Contact'
  }
</script>

<style scoped>

</style>

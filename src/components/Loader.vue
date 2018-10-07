<template>
    <div data-w-id="fd824abe-43f7-b600-011c-6c5442e5f495" class="loader">
        <div class="loader-text-holder">
            <div data-w-id="f6a163d6-f1c8-5310-9e68-3ab55e042393" style="opacity:0" class="loader-text" id="first">Sleep.
            </div>
            <div data-w-id="5bdec5b6-4a4a-ce4f-fcfc-2c784025a3b7" style="opacity:0" class="loader-text" id="second">Eat.</div>
            <div data-w-id="93dc4f5e-0c99-f319-1db4-f77e056a3ee5" style="opacity:0" class="loader-text" id="third">Code.
            </div>
            <div data-w-id="e3c3145a-880f-a7ac-31a0-f7673f24d2ae" style="opacity:0" class="loader-text" id="fourth">Repeat.</div>
        </div>
    </div>
</template>

<script>
    import * as tram from "tram";
    export default {
        name: "Loader",
        mounted() {
            this.animateLoader();
        },
        methods: {
            animateLoader: function () {
                const firstText = $("#first");
                const secondText = $("#second");
                const thirdText = $("#third");
                const fourthText = $("#fourth");
                const loader = $(".loader");
                tram(firstText)
                    .add("transform 1s ease")
                    .start({
                        opacity: 1
                    })
                    .wait(500)
                    .then(() => {
                        tram(secondText)
                            .add("transform 1s ease 1s")
                            .start({
                                opacity: 1
                            })
                            .wait(500)
                            .then(() => {
                                tram(thirdText)
                                    .add("transform 1s ease 2s")
                                    .start({
                                        opacity: 1
                                    })
                                    .wait(500)
                                    .then(() => {
                                        tram(fourthText)
                                            .add("transform 1500ms ease 3s")
                                            .start({
                                                opacity: 1
                                            })
                                            .wait(500)
                                            .then(() => {
                                                tram(loader)
                                                    .add("transform 1500ms ease")
                                                    .start({
                                                        opacity: 0
                                                    })
                                                    .then(() => loader.css("display", "none"));
                                            });
                                    });
                            });
                    });
            }
        }
    };
</script>

<style scoped>
</style>
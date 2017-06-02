<template>
    <div class="container pt-2">
        <nav class="navbar navbar-light navbar-toggleable-sm navbar-static-top text-uppercase app-navbar mb-5">
            <button
                    class="navbar-toggler navbar-toggler-right hidden-md-up"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarresponsive"
                    aria-controls="navbarresponsive"
                    aria-expanded="false"
                    aria-label="toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <a class="navbar-brand mr-auto align-middle" href="../">
                <span>Vue CMS</span>
            </a>

            <div class="collapse navbar-collapse" id="navbarresponsive">
                <ul class="nav navbar-nav ml-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="#" v-on:click.prevent="navHome">Home</a>
                    </li>
                    <li class="nav-item ">
                        <a class="nav-link" href="#" v-on:click.prevent="navArchives">Archives</a>
                    </li>

                </ul>
            </div><!--/.nav-collapse -->
        </nav>
    </div>
</template>

<script type="text/babel">
    export default {
        methods: {
            navHome() {
                this.$router.push({ name: 'Home'})
            },
            navArchives() {
                this.$router.push({ name: 'Articles'})
            }
        }
    }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
    .navbar {
        padding-left: 0; // otherwise logo is offset from the other content
    }
</style>

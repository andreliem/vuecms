<template>
    <div>
        <div class="block block-post">
            <div class="container">
                <div class="row">
                    <post-renderer class="col-sm-9" :post="post" :content="content"></post-renderer>
                </div>
            </div>
        </div>
        <div class="block">
            <div class="container">
                <hr/>
                <div class="col-sm-8">
                    <disqus v-bind:shortname="shortname" :identifier="postId"></disqus>
                </div>
            </div>
        </div>
    </div>
</template>

<script type="text/babel">
    import PostRenderer from './renderers/Post.vue'
    import Disqus from 'vue-disqus/VueDisqus.vue'
    import * as Posts from '@/api/posts'

    export default {
        components: {
            PostRenderer,
            Disqus
        },
        computed: {
            content() {
                let id = this.$route.params.id.toString()
                let content = require(`../api/posts/${id}.html`)
                return content
            },
            routeId() {
                return this.$route.params.id.toString()
            },
            post() {
                let id = this.$route.params.id.toString()
                return Posts.fetch().find((post) => {
                    return (post.id == id)
                })
            }
        },
        data() {
            return {
                shortname: "YOUR_DISQUS_NAME",
                isActive: false
            }
        },
        mounted() {
            window.PR.prettyPrint()
        }
    }
</script>
<style lang="scss" rel="stylesheet/scss scoped">

    .block-post {
        padding-top: 0;
        padding-bottom: 0;
    }

</style>

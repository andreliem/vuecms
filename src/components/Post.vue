<template>
    <div>
        <div class="block block-post">
            <div class="container">
                <div class="row">
                    <post-renderer class="col-sm-12" :post="post" :content="content"></post-renderer>
                </div>
            </div>
        </div>
        <div class="block">
            <div class="container">
                <hr/>
                <div class="col-sm-8">
                    <disqus ref="disqus" v-bind:shortname="shortname" :identifier="disqusId"></disqus>
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
            disqusId() { // env used to avoid re-use from dev to production
                return `${process.env.NODE_ENV}-${this.$route.params.id.toString()}`
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
                shortname: "DISQUS_ID",
                isActive: false
            }
        },
        mounted() {
            window.PR.prettyPrint()
        },
        watch: {
            '$route.params.id' (curr, old) {
                // disqus does not properly reload just based off the
                // disqusId computed property - we need to manually change it
                // when we know it should update
                this.$refs.disqus.init()
            }
        }
    }
</script>
<style lang="less" type="text/less" scoped>

    .block-post {
        padding-top: 0;
        padding-bottom: 0;
    }

</style>

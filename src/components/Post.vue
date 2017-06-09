<template>
    <div>
        <div class="block block-post">
            <div class="container">
                <div class="row">
                    <post class="col-sm-9" :post="post" :content="content"></post>
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
    import Post from './renderers/Post.vue'
    import Disqus from 'vue-disqus/VueDisqus.vue'
    import * as Posts from '@/api/posts'

    export default {
        components: {
            Post,
            Disqus
        },
        data() {
            return {
                content: '',
                post: '',
                shortname: "YOUR_DISQUS_NAME",
                postId: this.$route.params.id.toString(),
                isActive: false
            }
        },
        created() {
            let template = require(`../api/posts/${this.postId}.html`)
            this.content = template

            this.post = Posts.fetch().find((post) => {
                return (post.id == this.postId)
            })
        }
    }
</script>
<style lang="scss" rel="stylesheet/scss scoped">

    .block-post {
        padding-top: 0;
        padding-bottom: 0;
    }

</style>

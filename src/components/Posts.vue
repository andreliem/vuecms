<template>
    <div>
        <div class="block block-posts">
            <div class="container">
                <div class="row">
                    <div class="col-sm-6">
                        <h1>Past Posts</h1>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-8">
                        <ul>
                            <li v-for="post in posts">
                                <a v-bind:href="`/post/${post.id}`" v-on:click.prevent="navPost(post)">{{ post.title }}</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script type="text/babel">
    import * as Posts from '@/api/posts'
    import Post from '@/components/renderers/Post.vue'
    import Navigation from '@/mixins/navigation'
    import Disqus from 'vue-disqus/VueDisqus.vue'

    export default {
        mixins:[ Navigation ],
        data() {
            return {
                posts: Posts.fetch()
            }
        }
    }
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
    .block {
        padding-top: 0;
        padding-bottom: 0;
        min-height: 340px;
    }

</style>

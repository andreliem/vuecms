<template>
    <div class="block mt-4 pt-5">
        <div class="container">
            <div class="row">
                <div class="col-sm-2 mb-4">
                    <ul class="list-unstyled list-spaced">
                        <li><h6 class="text-uppercase">Site</h6></li>
                        <li><router-link to="/">Home</router-link></li>
                        <li><router-link to="/sample">Sample</router-link></li>
                    </ul>
                </div>
                <div class="col-sm-3 mb-4">
                    <ul class="list-unstyled list-spaced">
                        <li><h6 class="text-uppercase">Recent Posts</h6></li>
                        <li><a href="/posts" v-on:click.prevent="navPosts()">Archives</a></li>
                        <li v-for="post in posts">
                            <a v-on:click.stop.prevent="navPost(post)" v-bind:href="`/posts/${post.id}`">{{post.titleShort}}</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script type="text/babel">
    import * as Posts from '@/api/posts'
    import Navigation from '@/mixins/navigation'

    export default {
        mixins: [ Navigation ],
        data() {
            return {
                posts: Posts.fetch()
            }
        }
    }
</script>
<style lang="less" rel="stylesheet/less" scoped>
    .block {
        border-top: 1px solid #eee;
    }
</style>


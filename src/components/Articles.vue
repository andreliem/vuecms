<template>
    <div>
        <div class="block block-articles">
            <div class="container">
                <div class="row">
                    <div class="col-sm-6">
                        <h1>Past Articles</h1>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-8">
                        <ul>
                            <li v-for="article in articles">
                                <a v-bind:href="`/article/${article.id}`" v-on:click.prevent="navArticle(article)">{{ article.title }}</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script type="text/babel">
    import * as Articles from '@/api/articles'
    import Post from './renderers/Post.vue'
    import Disqus from 'vue-disqus/VueDisqus.vue'

    export default {
        components: {
        },
        data() {
            return {
                articles: Articles.fetch()
            }
        },
        methods: {
            navArticle(article) {
                this.$router.push({ name: 'Article', params: { id: article.id}})
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

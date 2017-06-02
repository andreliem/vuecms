<template>
    <div class="block mt-4 pt-5">
        <div class="container">
            <div class="row">
                <div class="col-sm-2 mb-4">
                    <ul class="list-unstyled list-spaced">
                        <li><h6 class="text-uppercase">Site</h6></li>
                        <li><a href="#">Home</a></li>
                    </ul>
                </div>
                <div class="col-sm-3 mb-4">
                    <ul class="list-unstyled list-spaced">
                        <li><h6 class="text-uppercase">Recent Articles</h6></li>
                        <li><a href="/articles" v-on:click.prevent="navArticles()">Archives</a></li>
                        <li v-for="article in articles">
                            <a v-on:click.stop.prevent="navArticle(article)" v-bind:href="`/articles/${article.id}`">{{article.titleShort}}</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script type="text/babel">
    import * as Articles from '@/api/articles'

    export default {
        data() {
            return {
                articles: Articles.fetch()
            }
        },
        methods: {
            navArticle(article) {
                this.$router.push({ name: 'Article', params: { id: article.id}})
            },
            navArticles() {
                this.$router.push({ name: 'Articles'})
            }
        },
        created() {
        }
    }
</script>
<style lang="less" rel="stylesheet/less" scoped>
    .block {
        border-top: 1px solid #eee;
    }
</style>


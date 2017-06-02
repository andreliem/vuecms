<template>
    <div>
        <div class="block block-post">
            <div class="container">
                <div class="row">
                    <post class="col-sm-9" :article="article" :content="content"></post>
                </div>
            </div>
        </div>
        <div class="block">
            <div class="container">
                <hr/>
                <div class="col-sm-8">
                    <disqus v-bind:shortname="shortname" :identifier="articleId"></disqus>
                </div>
            </div>
        </div>
    </div>
</template>

<script type="text/babel">
    import Post from './renderers/Post.vue'
    import Disqus from 'vue-disqus/VueDisqus.vue'
    import * as Articles from '@/api/articles'

    export default {
        components: {
            Post,
            Disqus
        },
        data() {
            return {
                content: '',
                article: '',
                shortname: "YOUR_DISQUS_NAME",
                articleId: this.$route.params.id,
                isActive: false
            }
        },
        created() {
            let template = require(`../api/articles/${this.articleId}.html`)
            this.content = template

            this.article = Articles.fetch().find((article) => {
                return (article.id == this.articleId)
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

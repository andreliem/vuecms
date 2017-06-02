<template>
    <div>
        <h3 class="title">{{ article.title }}</h3>

        <h6 class="mb-2">published by <a v-bind:href="article.author.url" target="_blank">{{article.author.name}}</a> on {{ article.date }}
            <div class="float-right">
                <span v-html="keywords"></span>
            </div>
        </h6>

        <div class="content" v-html="content"></div>
    </div>
</template>
<script type="text/babel">
    export default {
        props: ['content','article'],
        computed: {
            keywords() {
                return (this.article.keywords) ? 'categories: ' + this.article.keywords.join(', ') : ''
            }
        },
        created() {
        }
    }
</script>
<style lang="scss" rel="stylesheet/scss">
    .content {
        .icon-check {
            color: green;
        }

        ul li {
            margin-bottom:0.5em;
        }

        .prettyprint {
            padding: 1em;
            border-radius:10px;
            margin: 2em 0 2em 0em;
        }

        .badge {
            font-size: 1em;
        }

        p {
            margin-bottom: 1.4em;
        }

        .lead {
            font-style: italic;
            color: grey;
            border-top: 1px solid #efefef;
            border-bottom: 1px solid #efefef;
            padding:1em;
        }


        .title {
            font-weight: 500;
        }
    }
</style>
<style lang="less" rel="stylesheet/less" scoped>
</style>

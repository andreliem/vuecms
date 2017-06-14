<template>
    <div>
        <h3 class="title">{{ post.title }}</h3>

        <h6 class="mb-2">published by <a v-bind:href="post.author.url" target="_blank">{{post.author.name}}</a> on {{ post.date }}
            <div class="float-right">
                <span v-html="keywords"></span>
            </div>
        </h6>

        <div class="content" v-html="contentParsed"></div>
    </div>
</template>
<script type="text/babel">
    const util = {
        escapeHtml(element) {
            return element.text(element.html()).html()
        }
    }

    export default {
        props: ['content','post'],
        computed: {
            keywords() {
                return (this.post.keywords) ? 'categories: ' + this.post.keywords.join(', ') : ''
            },
            contentParsed() {
                let $content = $(this.content)
                let preContent = $content.find('pre.lang-html')

                preContent.each((index, element) => {
                    element = $(element)
                    element.replaceWith(`<pre class='prettyprint lang-html'>${util.escapeHtml(element)}</pre>`)
                })

                return $content.html()
            }
        },
        watch: {
            'content' (curr, old) {
                setTimeout(() => {
                    window.PR.prettyPrint()
                }, 500)

            }
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

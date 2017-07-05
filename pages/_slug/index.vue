<template>
  <div class="post">
    <div v-html="postContent"></div>
    <disqus ref="disqus" v-bind:shortname="disqusShortname" :identifier="disqusId"></disqus>
  </div>
</template>
<script type="text/babel">
  import Disqus from 'vue-disqus/VueDisqus.vue'

  export default {
    layout: 'slug',
    components: {
      Disqus
    },
    head () {
      let post = this.post
      return {
        title: 'Andre Liem',
        meta: [
          {
            hid: post.meta.id,
            name: post.meta.name,
            content: post.meta.content
          }
        ]
      }
    },
    fetch ({store, params}) {
      store.dispatch('getPosts')
      store.dispatch('getPostWithSlug', params.slug)
    },
    computed: {
      post () {
        return this.$store.state.post
      },
      postContent () {
        let post = this.$store.state.post
        return require(`../../content/posts/${post.id}.md`)
      },
      disqusShortname () {
        return 'your_disqus_short_name'
      },
      disqusId () { // env used to avoid re-use from dev to production
        return `${process.env.NODE_ENV}-${this.disqusShortname}-${this.post.id}`
      }
    },
    watch: {
      '$route.params.slug' (curr, old) {
        // disqus does not properly reload just based off the
        // disqusId computed property - we need to manually change it
        // when we know it should update
        this.$refs.disqus.init()
      }
    }
  }
</script>
<style type="text/less" lang="less">
  .post {
    pre {
      background-color: #f5f5f5;
      padding: 2em;
    }
    .hljs-built_in,
    .hljs-string,
    .hljs-section,
    .hljs-selector-class,
    .hljs-template-variable,
    .hljs-deletion,
    .hljs-function {
      color: #800;
    }
  }
</style>


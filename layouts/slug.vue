<template>
  <div class="page-slug" v-if="postExists">
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-12">
          <author size="small"></author>
        </div>
      </div>
      <div class="container-fluid">
        <div class="row justify-content-center mt-3">
          <div class="col-sm-10">
            <h6 class="created-at" v-html="post.created_at"></h6>
            <h3 class="mt-3" v-html="post.title"></h3>
          </div>
        </div>
        <div class="row justify-content-center mt-3">
          <div class="col-sm-10 markdown">
            <nuxt />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/babel">
  import Author from '~/components/author'

  export default {
    components: {
      Author
    },
    fetch ({store, params}) {
      store.dispatch('getPosts')
      store.dispatch('getPostWithSlug', params.slug)
    },
    computed: {
      slug () {
        return this.$route.params.slug
      },
      postExists () {
        return !!this.$store.state.post
      },
      post () {
        return this.$store.state.post
      }
    }
  }
</script>

<style lang="less" type="text/less">
  .markdown {
    font-size: 1.2em;

    blockquote {
      padding: .5rem 1rem;
      margin-bottom: 1rem;
      margin: 0 0 1rem;
      font-size: 1.25rem;
      border-left: .25rem solid #eceeef;
    }

    h1,h2,h3,h4,h5,h6 {
      margin-top: 2.2em;
    }

    pre {
      margin: 2.2em 0;
    }
  }
</style>

<style lang="less" scoped type="text/less">
  @import '../styles/base.less';
  .page-slug {
    margin-top: 5em;
  }
</style>

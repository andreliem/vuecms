<template>
  <div class="page-index">
    <div class="container-fluid text-center">
      <div class="row">
        <div class="col-sm-12">
          <author size="large"></author>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-sm-10">
          <hr class="mt-5 mb-5"/>
        </div>
      </div>
    </div>

    <div class="recent-posts container-fluid">
      <div v-for="post in posts" class="row post mb-5 justify-content-center">
        <div class="col-sm-10">
          <h6 class="created-at" v-html="post.created_at"></h6>
          <h5><router-link class="display-4 post-title" :to="{ name: 'slug', params: { slug: post.slug }}">{{post.title}}</router-link></h5>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import Author from '~/components/author'

  export default {
    components: {
      Author
    },
    head () {
      return {
        title: 'First Last',
        meta: [
          { hid: 'home', name: 'meta name', content: 'meta content seo goodness' }
        ]
      }
    },
    fetch ({store}) {
      store.dispatch('getPosts')
    },
    computed: {
      posts () {
        return this.$store.state.posts
      }
    }
  }
</script>

<style lang="less" scoped type="text/less">
  @import '../styles/base.less';

  .page-index {
    margin-top: 5em;
  }


  .recent-posts {
    .post-title {
      font-weight: 300;
      font-size: 1.5em;
      color: @grey;
      &:hover {
        text-decoration: underline;
      }
    }

    .created-at {
      font-style: italic;
      color: @grey-light;
    }

    .excerpt {
      font-size: 1.1em;
      line-height: 1.5em;
      color: @grey;
    }
  }

</style>

<template>
  <div v-bind:class="{ small : isSmall, large : isLarge }" class="text-center">
    <img class="me" src="http://vuejsradar.com/assets/img/logo2.png"/>
    <h1 class="site-title" v-bind:class="{ 'mt-3' : isLarge}">
      <router-link :to="{ path: '/'}">Site Title Here</router-link>
    </h1>
    <h2 class="site-subtitle" v-bind:class="{ 'mt-3' : isLarge}">about your blog</h2>
    <p class="mt-4" v-show="isLarge">
      <a href="#">my custom links</a> - <a href="https://fieldtripp.com">fieldtripp.com</a> - <a href="http://vuejsradar.com">vuejsradar.com</a> - <a href="http://midstride.com">midstride.com</a>
    </p>
    <div class="social d-flex justify-content-center" v-show="isLarge">
      <div v-show="isLarge" class="item"><a href="https://twitter.com/andreliem"><i class="fa fa-twitter" aria-hidden="true"></i></a></div>
      <div v-show="isLarge" class="item"><a href="https://www.linkedin.com/in/andrekliem/"><i class="fa fa-linkedin" aria-hidden="true"></i></a></div>
    </div>
  </div>
</template>

<script type="text/babel">
  export default {
    props: ['size'],
    data () {
      return {
        isSmall: (this.size === 'small'),
        isLarge: (this.size === 'large')
      }
    }
  }
</script>

<style lang="less" scoped type="text/less">
  @import '../styles/base.less';

  .small {
    .site-title {
      font-size: 2.5em;
      margin-bottom: 0.5em;
    }

    .site-subtitle {
      font-size: 1.5em;
      margin-bottom: 0.5em;
    }

  }

</style>

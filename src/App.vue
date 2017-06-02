<template>
  <div id="app">
    <HeaderNav></HeaderNav>
    <router-view></router-view>
    <SiteFooter></SiteFooter>
  </div>
</template>

<script>
  import HeaderNav from './components/Header.vue'
  import SiteFooter from './components/Footer.vue'
  export default {
    name: 'app',
    components: {
      HeaderNav,
      SiteFooter
    }
  }
</script>

<style>
</style>

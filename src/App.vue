<template>
  <div id="app">
    <router-view/>
    <FooterGuide v-show="$route.meta.showFooter"/>
  </div>
</template>

<script>
  import FooterGuide from './components/FooterGuide/FooterGuide.vue'
  import store from './store'
  //先引入
  import {mapActions} from 'vuex'

  export default {
    components: {
      FooterGuide
    },
   mounted(){
      // this.$store.dispatch('getAddress')
     //这样调用
     this.getAddress()
     this.getUseInfo()
   },

    methods:{
      //放在方法中
      ...mapActions(['getAddress','getUseInfo'])
    }

  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .app
    width 100%
    height 100%
    background #f5f5f5
</style>

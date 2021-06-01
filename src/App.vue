<template>
  <div id="app">
    <div class="app-header"></div>
    <div class="app-body">
      <keep-alive>
        <router-view class="router-view" v-if="$route.meta.keepAlive" />
      </keep-alive>
      <router-view class="router-view" v-if="!$route.meta.keepAlive" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {}
  },
  watch: {
    $route () {
      const { meta } = this.$route
      this.$f.setTitle(meta.title)
    }
  },
  methods: {
  },
  mounted () {
  }
}
</script>

<style lang="less">
#app {
  font-family: Microsoft YaHei, arial, sans-serif, Open Sans;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  font-size: 13px;
}
.app-body {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #f6f8f6;
  overflow: auto;

  > div {
    height: 100%;
    position: relative;
  }
}
</style>

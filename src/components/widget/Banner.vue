<template>
  <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
    <van-swipe-item v-for="(item, index) in banners" :key="index">
      <img :src="item.img" alt="" @click="jumpPage(item)" />
    </van-swipe-item>
  </van-swipe>
</template>
<script>
export default {
  name: 'Banner',
  props: {
    item: Object,
    ext: Object,
    moduleData: Object
  },
  computed: {
    banners () {
      return this.moduleData.banners || []
    }
  },
  methods: {
    jumpPage (item) {
      this.$f.jumpPage(item.itemNavigation)
    }
  }
}
</script>
<style lang="less" scoped>
.my-swipe {
  img {
    width: 100%;
    height: 210px;
  }
}
</style>

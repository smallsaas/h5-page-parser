<template>
  <div class="magic-nav">
    <div
      class="cate-item"
      v-for="(item, index) in navList"
      :key="index"
      @click="jumpPage(item)"
    >
      <img alt :src="item.img" class="cate-img" />
      <div class="cate-title">{{ item.title }}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'MagicNav',
  props: {
    item: Object,
    ext: Object,
    moduleData: Object
  },
  computed: {
    navList () {
      return this.moduleData.navList || []
    }
  },
  methods: {
    jumpPage (item) {
      this.$f.jumpPage(item.url)
    }
  }
}
</script>
<style lang="less" scoped>
.magic-nav {
  text-align: center;
  background: #fff;
  padding: 10px 5px;
  .cate-item {
    display: inline-block;
    width: 20%;
  }
  .cate-title {
    margin: 0 0 5px;
  }
  .cate-img {
    padding: 11px;
    width: 45px;
    height: 45px;
    border-radius: 50%;
  }
  .cate-tile {
    max-width: 60px;
  }
}
</style>

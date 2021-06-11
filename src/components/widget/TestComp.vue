<template>
  <div class="test-comp flex-center" @click="jumpPage">{{ data }}</div>
</template>
<script>
export default {
  name: 'TestComp',
  props: {
    item: Object,
    ext: Object,
    moduleData: Object,
    sourceData: Object
  },
  computed: {
    data () {
      return this.sourceData[this.moduleData.fromFidle]
    }
  },
  methods: {
    jumpPage () {
      this.$f.jumpPage(this.moduleData.itemNavigation)
    }
  }
}
</script>
<style lang="less" scoped>
.test-comp {
  width: 100%;
  height: 150px;
  background: #fff;
}
</style>

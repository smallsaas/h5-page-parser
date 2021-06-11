<template>
  <div class="form-item" @click="jumpPage">
    <div class="title">
      {{ item.name }}
    </div>
    <div class="flex-space-between mg-t5">
      <div class="author">{{ item.createUser }}</div>
      <div class="time">{{ item.createTime }}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'FormItem',
  props: {
    item: Object,
    ext: Object,
    moduleData: Object
  },
  methods: {
    jumpPage () {
      this.$f.jumpPage(this.moduleData.itemNavigation)
    }
  }
}
</script>
<style lang="less" scoped>
.form-item {
  margin: 10px;
  padding: 10px;
  border: 1px solid #dfdede;
  background: #f2f1f1;
  .title {
    font-size: 16px;
    line-height: 24px;
  }
  .author {
    color: @primary-color;
  }
  .time {
    color: #a0a0a0;
  }
}
</style>

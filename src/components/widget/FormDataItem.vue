<template>
  <div class="form-data-item" @click="jumpPage">
    <div class="title">体医预约流程(2021年06月10日)管理员</div>
    <div class="item">流水号：187</div>
    <div class="item">紧急程度：一般</div>
    <div class="item">表单名称：体质预约表单</div>
    <div class="item">发起人：管理员</div>
    <div class="item">当前办理人：管理员</div>
    <div class="item">状态：正在办理</div>
    <div class="item">当前步骤：体质预约审批</div>
    <div class="item">发起时间：2021/6/10 1:29:01</div>
    <div class="ta-r btn-warp mg-t10">
      <van-button size="mini" type="info">表单</van-button>
      <van-button class="mg-l10" size="mini" type="danger">意见</van-button>
      <van-button class="mg-l10" size="mini" type="primary">流程图</van-button>
      <van-button class="mg-l10" size="mini" type="warning">删除</van-button>
    </div>
    <div></div>
  </div>
</template>
<script>
export default {
  name: 'FormDataItem',
  props: {
    item: Object,
    ext: Object,
    moduleData: Object
  },
  methods: {
    jumpPage () {
      this.$f.jumpPage(this.moduleData.itemNavigation + '&formId=4&dataId=1')
    }
  }
}
</script>
<style lang="less" scoped>
.form-data-item {
  padding: 10px;
  border-bottom: 1px solid #dfdede;
  background: #fff;
  .title {
    font-size: 14px;
    line-height: 24px;
  }
  .item {
    color: #a0a0a0;
    line-height: 20px;
  }
  .btn-warp {
    button {
      padding-left: 8px;
      padding-right: 8px;
    }
  }
}
</style>

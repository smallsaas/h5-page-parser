<template>
  <div class="art-item">
    <div class="flex">
      <div class="left flex1">
        <div class="title text-line-1">{{ item.title }}</div>
        <div class="desc text-line-1">
          {{ item.desc }}
        </div>
        <div class="time">{{ item.time }}</div>
      </div>
      <div class="right">
        <img :src="item.img" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ArticleItem',
  props: {
    item: Object,
    ext: Object
  }
}
</script>
<style lang="less" scoped>
.art-item {
  padding: 16px;
  background: #fff;
  border-bottom: 1px solid #eee;
  .title {
    font-size: 14px;
    color: #333;
    font-weight: 700;
  }
  .desc {
    margin: 5px 0;
    color: #a9a9a9;
  }
  .time {
    color: #a9a9a9;
  }
}
.right {
  width: 82px;
  height: 64px;
  margin-left: 20px;
  img {
    width: 100%;
    height: 100%;
  }
}
</style>

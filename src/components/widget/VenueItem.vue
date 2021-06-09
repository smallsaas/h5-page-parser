<template>
  <div class="venue-item">
    <div class="flex">
      <div class="left">
        <img :src="item.img" />
      </div>
      <div class="right flex1">
        <div class="title text-line-1">{{ item.title }}</div>
        <div class="desc">{{ item.desc }}</div>
        <div class="time">{{ item.time }}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'VenueItem',
  props: {
    item: Object,
    ext: Object
  },
  data () {
    return {}
  }
}
</script>
<style lang="less" scoped>
.venue-item {
  padding: 16px;
  background: #fff;
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
  .left {
    width: 120px;
    height: 65px;
    margin-right: 10px;
    img {
      width: 100%;
      height: 100%;
      border-radius: 5px;
    }
  }
}
</style>

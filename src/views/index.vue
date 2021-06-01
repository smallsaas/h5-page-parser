<template>
  <div>
    <CustomPage v-if="config.type === 100" />
    <ListPage v-if="config.type === 200" :config="config" />
  </div>
</template>
<script>
import config from '@/config'
import ListPage from '@/components/ListPage'
import CustomPage from '@/components/CustomPage'

export default {
  name: 'Parser',
  components: {
    CustomPage,
    ListPage
  },
  data () {
    return {
      config
    }
  },
  created () {
    console.log('xxx ', this.config)
  },
  methods: {
    // TODO 加载配置
    init () {

    },
    loadConfig () {

    }
  }
}
</script>

<template>
  <div>
    <CustomPage v-if="config.pageType === '100'" :config="config" />
    <ListPage v-if="config.pageType === '200'" :config="config" />
  </div>
</template>
<script>
// import config from '@/config'
import ListPage from '@/components/ListPage'
import CustomPage from '@/components/CustomPage'
import { loadPageInfo } from '@/api'
import { Base64, setTitle, urlParam } from '@/utils'

export default {
  name: 'Parser',
  components: {
    CustomPage,
    ListPage
  },
  data () {
    return {
      config: {}
    }
  },
  created () {
    this.init()
  },
  watch: {
    $route () {
      this.config = {}
      this.init()
    }
  },
  methods: {
    async init () {
      const res = await loadPageInfo({ id: urlParam('id') })
      const config = res.data || {}
      config.config = JSON.parse(Base64.decode(config.jsonDefine))
      delete config.jsonDefine
      this.config = config
      setTitle(config.name)
    },
    loadConfig () {

    }
  }
}
</script>

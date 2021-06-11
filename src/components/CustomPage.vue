<template>
  <div class="custom-page">
    <div class="module_wrap" v-for="(item, index) in modules" :key="index">
      <div class="module_comp_wrapper mg-b10">
        <div>
          <WidgetJSX
            :module-type="item.type"
            :module-data="moduleData[item.key]"
            :source-data="data"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import WidgetJSX from '@/components/widget'
import axios from 'axios'
export default {
  name: 'CustomPage',
  components: {
    WidgetJSX
  },
  props: {
    config: Object
  },
  data () {
    return {
      modules: [],
      moduleData: {},
      loading: false,
      data: {}
    }
  },
  created () {
    this.init()
  },
  methods: {
    init () {
      const config = this.config.config
      this.moduleData = config.moduleData
      this.params = config.request
      this.modules = config.modules.map(item => {
        if (item.type === 'custom_component') {
          item.type = config.moduleData[item.key].name
          item.originType = 'custom_component'
        }
        return item
      })
      this.getData()
    },
    getData () {
      if (!this.config.config.loadApi) {
        return
      }
      this.loading = true
      axios.get(this.config.config.loadApi, { params: this.params })
        .then((res) => {
          this.loading = false
          if (Object.prototype.toString.call(res.data) === '[object Object]' && res.data.code.indexOf('00000') >= 0) {
            this.data = res.data.data
          }
        })
        .catch((err) => {
          console.log(err)
          this.loading = false
        })
    }
  }
}
</script>

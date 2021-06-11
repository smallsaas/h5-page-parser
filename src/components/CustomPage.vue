<template>
  <div class="custom-page">
    <div class="module_wrap" v-for="(item, index) in modules" :key="index">
      <div class="module_comp_wrapper mg-b10">
        <div>
          <WidgetJSX
            :module-type="item.type"
            :module-data="moduleData[item.key]"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import WidgetJSX from '@/components/widget'
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
      loading: false
    }
  },
  created () {
    this.init()
  },
  methods: {
    init () {
      const config = this.config.config
      this.moduleData = config.moduleData
      this.modules = config.modules.map(item => {
        if (item.type === 'custom_component') {
          item.type = config.moduleData[item.key].name
          item.originType = 'custom_component'
        }
        return item
      })
    },
  }
}
</script>

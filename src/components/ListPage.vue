<template>
  <div>
    <van-tabs v-model="active" @click="onTabClick">
      <van-tab
        :title="item.name"
        :name="item.value"
        v-for="(item, index) in tabList"
        :key="index"
      ></van-tab>
    </van-tabs>
    <div class="mg-t10">
      <div class="module_wrap" v-for="(item, index) in modules" :key="index">
        <div class="module_comp_wrapper mg-b15">
          <div v-if="item.originType !== 'custom_component'">
            <WidgetJSX
              :module-type="item.type"
              :module-data="moduleData[item.key]"
            />
          </div>
          <div v-if="item.originType === 'custom_component'">
            <van-list
              v-model="loading"
              :finished="finished"
              finished-text="没有更多了"
              @load="onLoad"
            >
              <WidgetJSX
                v-for="(listItem, i) in list"
                :key="i"
                :item="listItem"
                :ext="ext"
                :module-type="item.type"
                :module-data="moduleData[item.key]"
              />
            </van-list>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import WidgetJSX from '@/components/widget'
import axios from 'axios'

export default {
  name: 'ListPage',
  components: {
    WidgetJSX
  },
  props: {
    config: Object
  },
  data () {
    return {
      active: '',
      tabList: [],
      modules: [],
      moduleData: {},
      list: [],
      ext: {},
      params: {},
      loading: false,
      finished: false,
      page: {
        cur: 1,
        limit: 10,
        total: 0
      },
    }
  },
  created () {
    this.init()
  },
  methods: {
    init () {
      const config = this.config.config
      const tabConfig = JSON.parse(config.tabConfig)
      let modules = []
      if (tabConfig.show) {
        this.tabList = config.moduleData[config.modules[0].key]
        modules = config.modules.slice(1)
      } else {
        modules = config.modules.slice(0)
      }
      this.modules = modules.map(item => {
        if (item.type === 'custom_component') {
          item.type = config.moduleData[item.key].name
          item.originType = 'custom_component'
        }
        return item
      })
      this.resArgField = JSON.parse(config.response)
      this.reqArgField = JSON.parse(config.request)
      this.active = this.reqArgField.default[this.reqArgField.fixed]
      this.params[this.reqArgField.fixed] = this.active
      this.getData()
    },
    getData () {
      this.loading = true
      this.finished = false
      axios.get(this.config.config.loadApi, { params: this.params })
        .then((res) => {
          this.loading = false
          if (Object.prototype.toString.call(res.data) === '[object Object]' && res.data.code === '000000') {
            const list = this.$f.safeData(res.data, this.resArgField.list, [])
            this.list = [...this.list, ...list]
            this.page.total = this.$f.safeData(res.data, this.resArgField.total, 0)
            this.page.cur++
            if ((this.list.length >= this.page.total) || !list.length) {
              this.finished = true
            }
          }
        })
        .catch((err) => {
          console.log(err)
          this.loading = false
        })
    },
    onTabClick () {
      this.params.pn = 1
      this.params[this.reqArgField.fixed] = this.active
      this.list = []
      this.getData()
    },
    // TODO 未处理分页
    onLoad () {
      if (!this.list.length) {
        return
      }
      this.params.pn = this.page.cur + 1
      this.getData()
    }
  }
}
</script>

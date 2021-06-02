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
      // 列表数据
      list: [],
      // 返回的列表需要的其他数据
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
      if (tabConfig.show) {
        this.tabList = tabConfig.list
      }
      this.modules = config.modules.map(item => {
        if (item.type === 'custom_component') {
          item.type = config.moduleData[item.key].name
          item.originType = 'custom_component'
        }
        return item
      })
      this.resArgField = JSON.parse(config.response)
      this.reqArgField = JSON.parse(config.request)
      this.active = this.reqArgField.default[this.reqArgField.fixed]
      this.handleHttpParams(this.active, 1, 10)
      this.getData()
    },
    getData () {
      this.loading = true
      this.finished = false
      axios.get(this.config.config.loadApi, { params: this.params })
        .then((res) => {
          this.loading = false
          if (Object.prototype.toString.call(res.data) === '[object Object]' && res.data.code === '000000') {
            const otherField = this.reqArgField.other || []
            for (let i = 0; i < otherField.length; i++) {
              const field = otherField[i]
              if (Object.prototype.toString.call(res.data) === '[object Object]') {
                this.ext[field] = Object.assign({}, (this.ext[field] || {}), this.$f.safeData(res.data, 'data.' + field, {}))
              }
            }
            const list = this.$f.safeData(res.data, 'data.' + this.resArgField.list, [])
            this.list = [...this.list, ...list]
            this.page.total = this.$f.safeData(res.data, 'data.' + this.resArgField.total, 0)
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
      this.handleHttpParams(this.active, 1, 10)
      this.list = []
      this.getData()
    },
    onLoad () {
      if (!this.list.length) {
        return
      }
      this.handleHttpParams(this.active, this.page.cur + 1, 10)
      this.getData()
    },
    // 处理页码
    handleHttpParams (fixed, pn = 1, ps = 10) {
      if (this.reqArgField.fixed) {
        this.params[this.reqArgField.fixed] = fixed
      }
      if (this.reqArgField.pn) {
        this.params[this.reqArgField.pn] = pn
      }
      if (this.reqArgField.ps) {
        this.params[this.reqArgField.ps] = ps
      }
    }
  }
}
</script>

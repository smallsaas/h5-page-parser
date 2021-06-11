import { strInitialUp } from '@/utils'

export default {
  props: {
    moduleType: String,
    moduleData: [Object, Array],
    id: String,
    item: Object,
    ext: Object,
    sourceData: [Object, Array],
  },
  render() {
    const type = this.moduleType.split('_')
    const key = type.map(v => {
      return strInitialUp(v.replace(/^\.\//, '').replace(/\.\w+$/, ''))
    })
    const Tag = `Widget${key.join('')}`
    return <Tag moduleData={this.moduleData} id={this.id} ref={this.id + 'WidgetRef'} item={this.item} ext={this.ext} sourceData={this.sourceData}></Tag>
  },
  methods: {
    getConfig() {
      const setting = this.$refs[this.id + 'WidgetRef'].getConfig()
      return setting
    },
    setConfig() {
      if (this.$refs[this.id + 'WidgetRef'].setConfig) {
        this.$refs[this.id + 'WidgetRef'].setConfig()
      }
    },
  }
}

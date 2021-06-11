<template>
  <div class="form-detail">
    <H5FormRender
      :arg-form-id="formId"
      :arg-data-id="dataId"
      arg-mod="preview"
    />
  </div>
</template>
<script>
import { urlParam } from '@/utils'
export default {
  name: 'FormDetail',
  props: {
    item: Object,
    ext: Object,
    moduleData: Object
  },
  data () {
    return {
      formId: '',
      dataId: ''
    }
  },
  created () {
    this.formId = urlParam('formId')
    this.dataId = urlParam('dataId')
  }
}
</script>
<style lang="less" scoped>
</style>

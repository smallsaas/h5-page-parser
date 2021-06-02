export default {
  id: '1000',
  name: '关于我们',
  type: 200,
  config: {
    loadApi: 'https://www.fastmock.site/mock/96df9e8fb08bfe844b3e565f5a3206fe/test/api/pub/getList',
    tabConfig: '{"field":"type","show":true,"list":[{"name":"全部","value":"0"},{"name":"时尚搭配","value":"100"},{"name":"行业咨询","value":"200"}]}',
    response: '{"list":"type.list","total":"type.total","other":["article_info","favorite_count"]}',
    request: '{"fixed":"type","default":{"type":"0"},"pn":"pageNo","ps":"pageSize"}',
    modules: [{ key: 'top_tabs', type: 'top_tabs', name: 'top_tabs' }, { type: 'custom_component', name: '自定义组件', key: 'custom_component_1622462721609_51484' }],
    moduleData: { top_tabs: [{ name: '全部', value: '0' }, { name: '时尚搭配', value: '100' }, { name: '行业咨询', value: '200' }], custom_component_1622462721609_51484: { name: 'ArticleItem' } }
  }
}

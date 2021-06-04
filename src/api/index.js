import request from '@/utils/request'

export function loadPageInfo (data) {
  return request({
    url: '/api.page.design.page/loadPageInfo',
    method: 'post',
    data: data
  })
}

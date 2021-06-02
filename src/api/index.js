import request from '@/utils/request'

export function loadPageInfo (params) {
  return request({
    url: '/sport/api/page/manage/making/loadPageInfo.do',
    method: 'post',
    params
  })
}

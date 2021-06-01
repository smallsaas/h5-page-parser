import request from '@/utils/request'

export function getList (data) {
  return request({
    url: '/sport/api/page/manage/making/savePage.do',
    method: 'post',
    data: data
  })
}

export function loadPageInfo (data) {
  return request({
    url: '/sport/api/page/manage/making/loadPageInfo.do',
    method: 'get',
    data: data
  })
}

export function loadPageList (data) {
  return request({
    url: '/sport/api/page/manage/making/loadPageList.do',
    method: 'post',
    data: data
  })
}

export function deletePage (data) {
  return request({
    url: '/sport/api/page/manage/making/deletePage.do',
    method: 'post',
    data: data
  })
}

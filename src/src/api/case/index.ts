import request from '../api';
// 获取设计模式信息
export function getModeList() {
  return request({
    url: '/modeList',
    method: 'get',
  });
}

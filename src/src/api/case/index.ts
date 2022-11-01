import { service } from '../api';
// 获取设计模式信息
export function getModeList() {
  return service({
    url: '/modeList',
    method: 'get',
  });
}

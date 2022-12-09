/*
 * @Author: hcy
 * @Date: 2022-10-04 17:08:52
 * @LastEditors: hcy
 * @LastEditTime: 2022-12-09 18:48:18
 * @FilePath: \src\src\utils\configEnv.ts
 * @Description: 配置环境变量
 *
 */

const env = process.env.UMI_ENV || 'dev'; // 引入开发环境默认"dev"生产环境

const EnvConfig = {
  dev: {
    baseApi: '/api',
    mockApi: '/umi', //mock地址
  },
  prod: {
    baseApi: '/api',
  },
};
export default {
  env,
  mock: false,
  namespace: 'easySE',
  ...EnvConfig[env],
};

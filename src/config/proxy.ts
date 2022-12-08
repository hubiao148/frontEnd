/*
 * @Author: hcy
 * @Date: 2022-10-08 19:38:37
 * @LastEditors: zyqqun 2450100414@qq.com
 * @LastEditTime: 2022-12-08 15:15:00
 * @FilePath: \src\config\proxy.ts
 * @Description:
 *
 */
/**
 * 在生产环境 代理是无法生效的，所以这里没有生产环境的配置
 * -------------------------------
 * The agent cannot take effect in the production environment
 * so there is no configuration of the production environment
 * For details, please see
 * https://pro.ant.design/docs/deploy
 */
export default {
  dev: {
    '/api': {
      target: 'https://4717v036u3.zicp.fun/',
      // 配置了这个可以从 http 代理到 https
      // 依赖 origin 的功能可能需要这个，比如 cookie
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
    },
  },
};

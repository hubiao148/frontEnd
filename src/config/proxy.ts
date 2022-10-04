export default {
  '/api': {
    //要代理的真实服务器地址
    target: '',
    //配置了这个可以从 http 代理到 https
    https: true,
    //依赖origin 的功能可能需要这个，比如 cookie
    changeOrigin: true,
    pathRewrite: { '^/api': '' }, //路径替换
  },
};

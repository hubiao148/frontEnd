import { defineConfig } from 'umi';
import routes from './routes';
import theme from './theme';
import proxy from './proxy';

export default defineConfig({
  proxy, //引用反向代理的配置
  nodeModulesTransform: {
    //node_modules 目录下依赖文件
    type: 'none', //用all的话编译会很慢
  },
  routes: routes,
  fastRefresh: {}, //快速刷新 可以保持组件的状态
  devServer: {
    port: 8001, //.env里面权限更高一些
    // http:true ,//启用https安全访问
  },
  title: 'UMI3', //配置标题
  // favicon: '线上地址'
  dynamicImport: {
    loading: '@/components/loading', //按需加载时指定的loading组件
  },
  mountElementId: 'app',
  theme,
});

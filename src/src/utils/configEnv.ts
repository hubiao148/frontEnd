/**
 * 配置环境变量
 * 
 */
const env = process.env.UMI_ENV || "dev"; // 引入开发环境默认"dev"生产环境

const EnvConfig = {
    dev: {
        baseApi: "/api",
        mockApi: "/api",//mock地址
    },
    prod: {
        baseApi: "/api",
        mockApi: "/api",
    }
}
export default {
    env,
    mock: false,
    namespace: "font",
    ...EnvConfig[env]
}
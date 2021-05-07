module.exports = {
    // webpack中针对开发服务器设置
    // 与gulp相似都是前端项目打包工具
    devServer: {
        // 设置项目启动后是否自动打开浏览器
        open: true,
        // 设置 npm run serve 启动后的端口号（默认是8080）
        // 不要超过端口号允许设置的范围：0-65535
        // 并且需要避开常见的端口号：20，21，22，23，25，80，443，3306，3389，11211，
        port: 3000,
        // 如果你开始了eslint,不要让eslint在页面中遮罩，它错误会在console.log控制台打印
        overlay: false,
        // vue项目代理请求
        proxy: {
            // 规则（可以是多套）
            // 每套规则的属性，是一个标识符
            // axios中相对地址开头的字符串  匹配请求uri中的前几位
            // 例如：/api/a/b/c
            // 最终的请求为：https://api.iynn.cn/film/api/v1/a/b/c
            "/api": {
                // 把相对地址中的域名 映射到 目标地址中
                // localhost:3000 => https://api.iynn.cn/film/api/v1/
                target: "https://api.iynn.cn/film/api/v1",
                // 修改host请求的域名为目标域名
                // changeOrigin: false,
                changeOrigin: true,
                // 请求uri和目标uri有一个对应关系
                // 请求/api/login ==> 目标 /v1/api/login
                pathRewrite: {
                    "^/api": "",
                },
            },
            
            // "/ali":{
            //     //这里是请求阿里的接口代理规则
            // },
            // "/baidu":{

            // },
            // "/jd":{

            // }
            //$.get("/ali/get/money") 走阿里 拿第一段去匹配 匹配不上不走代理

        },
    },
};
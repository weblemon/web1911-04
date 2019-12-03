module.exports = {
    devServer: {
      proxy: {
        // 只要你通过当前的服务器 请求的地址是api开头的 就会被代理请求
        // 例如：
        // http://localhost:8080/admin-api/sys/login 就会被代理
        // http://localhost:8080/bb 就不会被代理
        '^/admin-api': {
            // 从http://localhost:8080会被转向目标（targe）服务器去请求
            target: "http://localhost:3000",
            // 路径重新
            pathRewrite: {
                "/admin-api": ""
            },
            // ws: true,
            // 是否修改原始地址
            changeOrigin: true
        },
        '^/proxy-api': {
            target: "http://console.ranyunlong.com:8080",
            pathRewrite: {
                "/proxy-api": "/renren-fast"
            },
            changeOrigin: true
        } 
      },
      // port: 8070
    }
  }

//   http://localhost:8080/admin-api/sys/login
//   1. 替换target地址
//   http://localhost:3000/admin-api/sys/login
//   2. 路径重重写
//   http://localhost:3000/sys/login

// 代理请求的流程

// 1. 我们依然请求当前的(开发)服务器 （不会有跨域）
// 2. (开发)服务器定义一个转发请求规则
// 3. 当请求的路径匹配规则时
// 4. 请求会被(开发)服务器转发
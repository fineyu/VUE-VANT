module.exports = {
    
    devServer: {
      open: true,
      disableHostCheck: true,
      proxy: {
        '/api': {
          target: 'http://localhost:8081',
          ws: true,
          changeOrigin: true,
          pathRewrite: {
            '^/api': 'http://qmds.jsdianshi.com'  //通过pathRewrite重写地址，将前缀/api转为/
          }
        }
      }
    }
}


// module.exports = {
//   devServer: {
//     // 设置代理
//     proxy: {
//       "/cms": {
//         target: 'http://localhost:8081', // 访问数据的计算机域名
//         ws: true, // 是否启用websockets
//         changOrigin: true //开启代理
//       }
//     }
//   }
// };


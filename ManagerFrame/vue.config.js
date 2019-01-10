module.exports = {
  baseUrl: '',  //使用相对路径  
  devServer: {
    port: 9002,
    disableHostCheck: true,  //允许外网访问
    //网络代理，接口转发
    proxy: {
      '/Api': {
        target: 'http://localhost:1337'
      }
    }
  },
}
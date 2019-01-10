module.exports = {
  baseUrl: '',  //使用相对路径  
  devServer: {
    port: 9001,
    disableHostCheck: true,  //允许外网访问
    //网络代理，接口转发
    proxy: {
      '/Api': {
        target: 'http://localhost:1337'
      }
    },
    css: {
      loaderOptions: {
        less: {
          //参考配置项 https://github.com/youzan/vant/blob/dev/packages/style/var.less
          modifyVars: {
            red: '#ff2b2b',
            blue: '#3eaf7c',
            orange: '#f0ad4e',
            green: '#00bc71',
          }
        }
      }
    },
  },
}
module.exports = {
  presets: [
    '@vue/app'
  ],
  //按需加载vant组件
  plugins: [
    [
      'import', 
      {
        libraryName: 'vant',
        libraryDirectory: 'es',
        style: name => `${name}/style/less` 
      },
      'vant'
    ]
  ]
}

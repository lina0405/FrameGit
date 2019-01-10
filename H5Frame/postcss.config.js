module.exports = {
  plugins: {
    autoprefixer: {},
    //px自动转化为rem
    'postcss-pxtorem': {
      rootValue: 100,
      propList: ['*', '!border*']
    }
  }
}

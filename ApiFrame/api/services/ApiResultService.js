module.exports = {
  success(data = '操作成功') {
    return {
      code: '0000',
      data,
      message: ''
    }
  },
  error(code, message) {
    return {
      code,
      data: null,
      message
    }
  },
  noLogin() {
    return {
      code: '0001',
      data: null,
      message: '请先登录'
    }
  },
  noPermission() {
    return {
      code: '0002',
      data: null,
      message: '您没有权限，请联系管理员'
    }
  }
}
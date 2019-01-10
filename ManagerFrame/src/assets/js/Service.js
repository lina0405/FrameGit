import axios from 'axios'
import _ from 'lodash'

const Service = axios.create({
  baseURL: '/Api',
  method: 'post',
  transformRequest: [function (data) {
    // 对 data 进行任意转换处理
    let ret = ''
    for(let it in data) {
      ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
    }
    return ret
  }]
})

const AJAX = {}

//接口
const ajaxFn = {
  //登录
  PostLogin: {},
  //商户
  GetShopList: {},
  GetShopInfo: {},
  PostShopInfo: {},
  DelShop: {},
  //设置
  GetSetting: {},
  PostSetting: {},
  //优惠券
  GetCodeList: {},
  PostCodeInfo: {},
  PostGenerateCode: {},
  DelCode: {},
  //上传图片
  PostImage: {},
  //商户分类
  GetShopClassList: {},
  PostShopClassInfo: {},
  DelShopClass: {},
  //活动管理
  GetActionList: {},
  GetActionInfo: {},
  PostActionInfo: {},
  GetActionMemberList: {},
  DownloadActionMemberList: {}
}

for(let fnName in ajaxFn) {
  AJAX[fnName] = function(data) {
    return generateFn(fnName, data)
  }
}

function generateFn(type, data) {
  return new Promise((resolve, reject) => {

    Service({
      method: 'post',
      url: type,
      data
    })
    .then(({ data }) => {
      if(data.code === '0000') {
        resolve(data.data)
      } else {
        reject(data.message)
      }
    })
    .catch(err => {
      reject(err)
    })

  }) 
}

export {
  AJAX,
  Service
}



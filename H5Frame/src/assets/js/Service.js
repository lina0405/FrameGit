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

const ajaxFn = {
  getDataByNameAndId: {},
  SendEmailById: {},
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



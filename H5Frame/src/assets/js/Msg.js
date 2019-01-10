/**
 * 作者： ln
 * 日期：2018-11-02
 * 版本：v0.0.1
 */
import loadImg from '../image/loading.gif'

var clickType = 'click'

var loadNum = 0

function divNode(str) {
  let div = document.createElement('div')
  div.innerHTML = str
  return div
}

function showLoading() {
  loadNum++
  //添加到BODY
  if(loadNum === 1) {
    document.body.appendChild(divNode(loadHtml()))
  }

  function loadHtml({msg = ''} = {}) {
    let html = `<div class="view msg-view msg-load-view"><div class="animated zoomIn">
      <img src='${loadImg}'/>`
    
    msg && (html += `<div class="msg-html">${msg}</div>`)
    return html + `</div></div>`
  }

}

function endLoading() {
  loadNum--
  if(loadNum < 0) {
    loadNum = 0
  }
  if(loadNum > 0) {
    return
  }
  setTimeout(() => {
    let d = document.querySelector('.msg-load-view')
    d && d.parentNode.removeChild(d)
  })
}

function showMessage({icon = '', msg = '', success = null} = {}) {
  let mNode = divNode(showHtml({icon, msg})),
      btnOk = mNode.querySelector('.btn-ok')
  
  success && btnOk.addEventListener(clickType, success)
  btnOk.addEventListener(clickType, closeMessage)
  //添加到BODY
  document.body.appendChild(mNode)

  function closeMessage(e) {
    e.preventDefault()
    success && btnOk.removeEventListener(clickType, success)
    btnOk.removeEventListener(clickType, closeMessage)
    mNode.parentNode.removeChild(mNode)
  }

  function showHtml({msg = '', icon = ''} = {}) {
    let html = `<div class="view msg-view msg-show-view"><div class="animated zoomIn">`

    icon && (html += `<div class="msg-icon ${icon}"></div>`)
    msg && (html += `<div class="msg-html">${msg}</div>`)
    html += `<div class="msg-btns"><button class="btn btn-ok btn-primary">确定</button></div>`

    return html + `</div></div>`
  }
}

function confirmMessage({icon = '', msg = '', success = null, cancel = null, btns = { cancel: '取消', ok: '确认' } } = {}) {
  let mNode = divNode(confirmHtml({icon, msg, btns})),
      btnOk = mNode.querySelector('.btn-ok'),
      btnCancel = mNode.querySelector('.btn-msg-cancel')

  success && btnOk.addEventListener(clickType, success)
  btnOk.addEventListener(clickType, closeMessage)

  cancel && btnCancel.addEventListener(clickType, cancel)
  btnCancel.addEventListener(clickType, closeMessage)
  //添加到BODY
  document.body.appendChild(mNode)

  function closeMessage(e) {
    e.preventDefault()

    success && btnOk.removeEventListener(clickType, success)
    btnOk.removeEventListener(clickType, closeMessage)

    cancel && btnCancel.removeEventListener(clickType, success)
    btnCancel.removeEventListener(clickType, closeMessage)

    mNode.parentNode.removeChild(mNode)
  }

  function confirmHtml({msg = '', icon = '', btns} = {}) {
    let html = `<div class="view msg-view msg-confirm-view"><div class="animated zoomIn">`

    icon && (html += `<div class="msg-icon ${icon}"></div>`)
    msg && (html += `<div class="msg-html">${msg}</div>`)
    html += `<div class="msg-btns"><button class="btn btn-ok btn-primary">${btns.ok}</button></div>`
    html += `<div class="msg-cancel"><button class="btn-msg-cancel">${btns.cancel}</button></div>`

    return html += `</div></div>`
  }

}

function toastMessage({msg = '', icon = '', time = 2000, success = null} = {}) {
  let mNode = divNode(toastHtml({msg, icon}))
  //添加到BODY
  document.body.appendChild(mNode)
  //一定时间后自动消失
  setTimeout(function() {
    mNode.parentNode.removeChild(mNode)
    success && success()
  }, time)

  function toastHtml({msg = '', icon = ''} = {}) {
    let html = `<div class="view msg-view msg-toast-view"><div class="animated zoomIn">`

    icon && (html += `<div class="msg-icon ${icon}"></div>`)
    msg && (html += `<div class="msg-html">${msg}</div>`)

    return html += `</div></div>`
  }
}

function inputMessage({msg = '', icon = '', success = null, input = '', defaultValue = [], btns = { cancel: '取消', ok: '确认' }} = {}) {
  let mNode = divNode(inputHtml({msg, icon, input, defaultValue, btns})),
      btnOk = mNode.querySelector('.btn-ok'),
      btnCancel = mNode.querySelector('.btn-msg-cancel'),
      defaultSpan = Array.from(mNode.querySelectorAll('.msg-default-values span')),
      inputValue = mNode.querySelector('textarea')
    
  input && (inputValue.value = input)
  
  //默认值点击更换
  defaultSpan.forEach(item => {
    item.addEventListener(clickType, setInputValue)
  })

  //确认
  success && btnOk.addEventListener(clickType, inputSuccess)
  btnOk.addEventListener(clickType, closeMessage)
  btnCancel.addEventListener(clickType, closeMessage)

  document.body.appendChild(mNode)

  function closeMessage(e) {
    e.preventDefault()
    success && btnOk.removeEventListener(clickType, inputSuccess)
    btnOk.removeEventListener(clickType, closeMessage)
    btnCancel.removeEventListener(clickType, closeMessage)
    mNode.parentNode.removeChild(mNode)
  }

  function setInputValue(e) {
    e.preventDefault()
    inputValue.value = e.target.innerText
  }

  function inputSuccess(e) {
    e.preventDefault()
    success(inputValue.value)
  }

  function inputHtml({msg = '', icon = '', defaultValue = [], btns} = {}) {
    var html = `<div class="view msg-view msg-input-view"><div class="animated zoomIn">`
    
    icon && (html += `<div class="msg-icon ${icon}"></div>`)
    msg && (html += `<div class="msg-html">${msg}</div>`)

    html += `<div class="msg-input"><textarea rows="3"></textarea></div>`

    if(defaultValue.length > 0) {
      html += `<div class="msg-default-values">`
      defaultValue.forEach( item => {
        html += `<span>${item}</span>`
      })
      html += `</div>`
    }

    html += `<div class="msg-btns"><button class="btn btn-ok btn-primary">${btns.ok}</button></div>`
    html += `<div class="msg-cancel"><button class="btn-msg-cancel">${btns.cancel}</button></div>`

    return html += `</div></div>`
  }
}

//显示iframe，这里用来选择
function showFrame(url, eventName, cb) {
  
  if(!window.plus) {
    let iframe = document.createElement('iframe')
    iframe.src = url
    iframe.classList.add('view')

    setTimeout(() => {
      document.body.append(iframe)
      location.hash = encodeURIComponent(url.split('/').pop())
    }, 100)
    
    window.onhashchange = function() {
      if(location.hash === '') {
        document.body.removeChild(iframe)
        window.onhashchange = null
      }
    }
    
    window.addEventListener(eventName, function(data) {
      data = data._args
      cb && cb(data)
    })

    return
  }

  //创建新窗口\
  let ws = plus.webview.create(url, url, {}, { frame: true, eventName })
  window.addEventListener(eventName, function(data) {
    data = data.detail
    cb && cb(data)
  })
  ws.show('slide-in-right')

}

const Msg = {
  showLoading,
  endLoading,
  showMessage,
  toastMessage,
  confirmMessage,
  inputMessage,
  showFrame
}

export { Msg }

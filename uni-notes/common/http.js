const baseUrl = 'http://localhost:7001'

// 发送ajax请求
function ajax({
  url,
  method,
  data
}) {
  return new Promise((resolve, reject) => {
    const token = uni.getStorageSync('token')
    data || (data = {})
    token !== '' ? (data.token = token) : ''
    uni.request({
      url: baseUrl + url,
      method,
      data,
      success: res => {
        if (res.data.success === true) {
          resolve(res.data)
        } else {
          uni.showToast({
            title: res.data.message,
            icon: 'none',
          });
          reject(res.data.message)
        }
      },
      fail: (err) => {
        uni.showToast({
          title: '请求出错',
          icon: 'none',
        });
        reject(err)
      }
    });
  })
}

function get(url, data) {
  const method = 'GET'
  return ajax({
    url,
    method,
    data
  })
}

function post(url, data) {
  const method = 'POST'
  return ajax({
    url,
    method,
    data
  })
}



export default {
  ajax,
  get,
  post
}

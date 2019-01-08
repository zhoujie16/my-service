const baseUrl = 'http://locolhost:7001/'

// 发送ajax请求
function ajax(_params) {
  const params = Object.assign({
    url: baseUrl + url,
    method:'GET',
    data: {},
    success: res => {
    },
    fail: () => {},
    complete: () => {}
  }, _params)
  const {
    url,
    method,
    data,
    success,
    fail,
    complete
  } = params
  return new Promise((res, rej) => {
    uni.request({

    });
  })
}

function get() {



}
module.exports = {

}

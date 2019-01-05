// app/extend/helper.js
const uuidv4 = require('uuid/v4');
module.exports = {
  //检测字段 是否为空
  checkFieldEmpty(value) {
    // this 是 helpervalue 对象，在其中可以调用其他 helper 方法
    // this.ctx => context 对象
    // this.app => application 对象
    if (value === undefined || value === null || value === '') {
      return true
    }
    if (value.trim() === '') {
      return true
    }
    return false
  },
  getUUID(){
    return uuidv4()
  }
};

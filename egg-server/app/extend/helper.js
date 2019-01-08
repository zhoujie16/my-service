// app/extend/helper.js
const uuidv4 = require('uuid/v4');
module.exports = {
  //去除对象里的 undefind 和 null 的键
  cleanDictUndefind(obj){
    let _obj = {}
    Object.keys(obj).forEach(function(key){
      const val = obj[key]
      if (!(val === undefined || val === null)){
        _obj[key] = obj[key]
      }
    });
    return _obj
  },
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
  //生成 UUID
  getUUID(){
    return uuidv4()
  }
};

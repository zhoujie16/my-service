module.exports = {
  //返回成功数据
  success(data){
    this.body = {
      data,
      success: true,
      code :0,
    }
  },
  //返回时报数据
  error(message){
    this.body = {
      success: false,
      code: 0,
      message
    }
  }
}

// app/service/user.js
const Service = require('egg').Service;

class UserService extends Service {
  async queryUser({userCode}) {
    const ctx = this.ctx;
    return ctx.model.User.find({userCode})
      .then(res => {
        return res
        return {success: true, code: 0}
      }).catch(err => {
        return {success: false, message: err}
      })
  }

  // 添加用户
  async addUser({userCode, userName, password}) {
    const ctx = this.ctx
    if (ctx.helper.checkFieldEmpty(userCode) || ctx.helper.checkFieldEmpty(password)) {
      return {
        success: false,
        message: '账号或密码不能为空'
      }
    }

    /*if (userCode.length < 8) {
      return {
        success: false,
        message: '账号长度至少8位'
      }
    }
    if (password.length < 8) {
      return {
        success: false,
        message: '密码长度至少8位'
      }
    }*/
    //查询是否存在
    const userArr = await this.service.user.queryUser({userCode})
    if (userArr.length > 0) {
      return {
        success: false,
        message: '用户名已存在'
      }
    }
    return ctx.model.User.create({
      userCode,
      userName,
      password,
      noteClassifys: [{
        classifyName: '默认分组',
        isDefault: true
      }]
    }).then(res => {
      return {success: true, code: 0}
    }).catch(err => {
      return {success: false, message: err}
    })
  }
}

module.exports = UserService;

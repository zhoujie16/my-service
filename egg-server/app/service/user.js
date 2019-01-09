// app/service/user.js
const Service = require('egg').Service;

class UserService extends Service {
  //查询用户是否存在
  async queryUser({userCode}) {
    const ctx = this.ctx;
    return ctx.model.User.find({userCode})
      .then(res => {
        return res
      }).catch(err => {
        return {success: false, message: err}
      })
  }

  // 添加用户
  async addUser({userCode, userName, password}) {
    const ctx = this.ctx
    if (ctx.helper.checkFieldEmpty(userCode) || ctx.helper.checkFieldEmpty(password)) {
      return '账号密码不能为空'
    }

    /*if (userCode.length < 8) {
      return '账号长度至少8位'
    }
    if (password.length < 8) {
      return '密码长度至少8位'
    }*/
    //查询是否存在
    const userArr = await this.service.user.queryUser({userCode})
    if (userArr.length > 0) {
      return '用户名已存在'
    }
    const addUserRes = await ctx.model.User.create({
      userCode,
      userName,
      password,
    })
    const userId = addUserRes._id
    return ctx.model.Notes.Classify.create({
      userId, userCode,
    }).then(res => {
      return true
    })
  }
}

module.exports = UserService;

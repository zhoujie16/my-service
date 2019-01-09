const Service = require('egg').Service;

class LoginService extends Service {
  async login({userCode, password}) {
    const ctx = this.ctx;
    const userArr = await this.service.user.queryUser({userCode})
    if (userArr.length === 0) {
      return ctx.error('用户名不存在')
    }
    const user = userArr[0]
    if (user.password !== password) {
      return ctx.error('用户名或密码不正确')
    }
    const token = ctx.helper.getUUID()
    return await this.service.token.saveUserToken({
      userId:user._id,
      userCode,
      token
    }).then(res=>{
      return ctx.success({
        token
      })
    })
  }
}

module.exports = LoginService;

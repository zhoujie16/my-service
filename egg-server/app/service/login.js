const Service = require('egg').Service;

class LoginService extends Service {
  async login({userCode, password}) {
    const ctx = this.ctx;
    const userArr = await this.service.user.queryUser({userCode})
    if (userArr.length === 0) {
      return {
        success: false,
        message: '用户不存在'
      }
    }
    const user = userArr[0]
    if (user.password !== password) {
      return {
        success: false,
        message: '用户名或密码不正确'
      }
    }
    // return await this.service.token.queryUserToken({userCode})
    const token = ctx.helper.getUUID()
    const tmp = await this.service.token.saveUserToken({
      userCode,
      token
    })
    if (tmp){
      return {
        success: true,
        code: 0,
        data: {
          token
        }
      }
    } else {
      return {
        success: false,
        err: '服务器错误'
      }
    }

  }
}

module.exports = LoginService;

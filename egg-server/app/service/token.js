const Service = require('egg').Service;

module.exports = class TokenService extends Service {
  //查询用户token是否存在
  async queryUserToken({userCode}) {
    const {ctx} = this
    return ctx.model.Token.find({
      userCode
    }).then(res => {
      if (res.length === 0) {
        return false
      } else {
        return res[0].token
      }
    }).catch(err => {
      console.log(err)
    })
  }
  async queryUserTokenByToken({token}){
    const {ctx} = this
    return ctx.model.Token.find({
      token
    }).then(res => {
      if (res.length === 0) {
        return false
      } else {
        return res[0].token
      }
    }).catch(err => {
      console.log(err)
    })
  }

  //保存 或者 替换用户token
  async saveUserToken({userCode, token}) {
    const {ctx} = this
    //先查询 token是否存在
    const token_old = await this.service.token.queryUserToken({userCode})
    if (token_old) {
      //更新 token
      return ctx.model.Token.update({
        userCode
      }, {
        // userCode,
        token
      }).then(res => {
        return true
      }).catch(err => {
        return false
      })
    } else {
      //添加token
      return ctx.model.Token.create({
        userCode,
        token
      }).then(res => {
        return true
      }).catch(err => {
        return false
      })
    }
  }
}

'use strict';

const Controller = require('egg').Controller;

class LoginController extends Controller {
  async login() {
    const {ctx} = this;
    const {userCode,password} = ctx.request.body
    //设置session
    ctx.session.token = 'qwerewer'
    ctx.cookies.set('qqq','qqq')
    ctx.body = await ctx.service.login.login({userCode,password})
  }
}

module.exports = LoginController;

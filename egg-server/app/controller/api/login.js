'use strict';

const Controller = require('egg').Controller;

class LoginController extends Controller {
  async login() {
    const {ctx} = this;
    const {userCode,password} = ctx.request.body
    return await ctx.service.login.login({userCode,password})
  }
}

module.exports = LoginController;

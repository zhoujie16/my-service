'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async add() {
    const {ctx} = this;
    const {userCode, userName, password} = ctx.request.body
    const res = await ctx.service.user.addUser({userCode, userName, password})
    if (res === true) {
      ctx.success()
    } else {
      ctx.error(res)
    }
  }
}

module.exports = UserController;

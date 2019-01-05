'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async add() {
    const {ctx} = this;
    const {userCode,userName,password} = ctx.query
    ctx.body = await ctx.service.user.addUser({userCode,userName,password})
  }
}

module.exports = UserController;

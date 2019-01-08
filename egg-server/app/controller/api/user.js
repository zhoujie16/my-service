'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async add() {
    const {ctx} = this;
    const {userCode,userName,password} = ctx.request.body
    console.log({userCode,userName,password})
    ctx.body = await ctx.service.user.addUser({userCode,userName,password})
  }
}

module.exports = UserController;

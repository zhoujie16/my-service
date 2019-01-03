'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async list() {
    const ctx = this.ctx;
    var list = await ctx.service.user.list()
    this.ctx.body = list
  }
}

module.exports = UserController;

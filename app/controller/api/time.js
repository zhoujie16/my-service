'use strict';

const Controller = require('egg').Controller;

class TimeController extends Controller {
  async getBJtime() {
    const ctx = this.ctx;
    this.ctx.body = await ctx.service.time.getBJtime()
  }
}

module.exports = TimeController;

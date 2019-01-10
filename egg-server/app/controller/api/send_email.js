'use strict';

const Controller = require('egg').Controller;

class SendEmailController extends Controller {
  async sendEmail() {
    const {ctx} = this;
    const res = await ctx.service.sendEmail.sendEmail({
      email:'zhoujie16m@163.com',
      subject:'验证码',
      html:'验证码是 1234'
    })
    if (res===true){
      return ctx.success()
    } else {
      return ctx.error('邮件发送失败')
    }
  }
}

module.exports = SendEmailController;

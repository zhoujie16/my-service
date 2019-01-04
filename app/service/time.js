// app/service/user.js
const Service = require('egg').Service;
const moment = require('moment');
moment.locale('zh-cn');

class TimeService extends Service {
  //北京时间
  async getBJtime() {
    const {ctx} = this;
    const url = `http://api.m.taobao.com/rest/api3.do?api=mtop.common.getTimestamp`;
    const result = await ctx.curl(url, {
      dataType: 'json',
      timeout: 3000
    })
    const timestamp = Number(result.data.data.t)
    const timeString = moment(timestamp).format('YYYY-MM-DD HH:mm:ss')
    return {
      data: {
        timestamp,
        timeString,
      },
      success: true,
      code: 0,
      message: ''
    }
  }
}

module.exports = TimeService;

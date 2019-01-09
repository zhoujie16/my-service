
const Service = require('egg').Service;

class HomeService extends Service {
  async test(){
    const {ctx} = this
    return ctx.success({
      a:'a'
    })

  }
}

module.exports = HomeService;

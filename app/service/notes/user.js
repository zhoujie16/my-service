// app/service/user.js
const Service = require('egg').Service;

class UserService extends Service {
  async list() {
    const ctx = this.ctx;
    return ctx.model.notes.User.find({})
  }

  // 添加用户
  async add() {
    const ctx = this.ctx
    return ctx.model.User.create({
      userName: "Tom",
      age: 19,
      gender: "nan",
      hobby: ['eating', 'joking']
    }).then(res => {
      return {success: true, mag: "", code: 0}
    }).catch(err => {
      return {success: false, err: err}
    })
  }
}

module.exports = UserService;

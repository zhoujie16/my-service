// app/service/notes/classify.js
const Service = require('egg').Service;

class NoteService extends Service {
  //新增一个笔记
  async addNote({note,ceateTimestamp}) {
    const {ctx} = this;
    if (note === undefined || note === '') {
      return {success: false, message: '笔记内容不能为空'}
    }
    return ctx.model.Notes.Note.create({
      userName: '周杰',
      note,
      ceateTimestamp: new Date().getTime(),
      updateTimestamp: new Date().getTime(),
      ceateTime: new Date().getTime(),
      updateTime: new Date().getTime(),
      address: '',
    }).then(res => {
      return {
        success: true,
        code: 0,
        message: '笔记保存成功'
      }
    }).catch(err => {
      return {success: false, err: err}
    })
  }
}

module.exports = NoteService;

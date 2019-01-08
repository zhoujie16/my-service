// app/service/notes/classify.js
const Service = require('egg').Service;

class NoteService extends Service {
  //新增一个笔记
  async addNote({note, ceateTimestamp, classifyName}) {
    const {ctx} = this;
    if (note === undefined || note === '') {
      return {success: false, message: '笔记内容不能为空'}
    }
    return ctx.model.Notes.Note.create({
      userName: '周杰',
      note,
      classifyName: classifyName || '默认分组',
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

  //查询笔记
  async queryNote({_id}) {
    const {ctx} = this;
    return ctx.model.Notes.Note.find(ctx.helper.cleanDictUndefind({
      _id
    })).then(res => {
      return {
        success: true,
        code: 0,
        data:res,
      }
    }).catch(err => {
      return {success: false, err: err}
    })
  }

  //编辑
  async editNote({id}){
    const {ctx} = this;
    //查询笔记 根据id


  }
}

module.exports = NoteService;

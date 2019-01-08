// app/service/notes/classify.js
const Service = require('egg').Service;

class ClassifyService extends Service {
  //新增一个分类
  async addClassify({classifyName}) {
    const {ctx} = this;
    if (classifyName === undefined || classifyName === '') {
      return {success: false, message: '分类名称不能为空'}
    }
    //查询是否重复
    const arr = await ctx.service.notes.classify.queryClassify({classifyName})
    if (arr.length > 0) {
      return {
        success: false,
        code: 0,
        message: '分类名称已存在'
      }
    }
    return ctx.model.Notes.Classify.create({
      classifyName
    }).then(res => {
      return {
        success: true,
        code: 0,
        message: '分类保存成功'
      }
    }).catch(err => {
      return {success: false, err: err}
    })
  }

  //查询分类
  async queryClassify({classifyName}) {
    const {ctx} = this;
    return ctx.model.Notes.Classify.find({
      classifyName
    }).then(res => {
      return res
    }).catch(err => {
      return err
    })
  }


}

module.exports = ClassifyService;

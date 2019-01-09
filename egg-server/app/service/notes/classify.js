// app/service/notes/classify.js
const Service = require('egg').Service;

class ClassifyService extends Service {
  //新增一个分类
  async addClassify({classifyName}) {
    const {ctx} = this;
    if (ctx.helper.checkFieldEmpty(classifyName)) {
      return '分类名称不能为空'
    }
    //查询 用户 分类是否存在
    //查询用户userId
    const [userTokenObj] = await ctx.model.Token.find({
      token: ctx.request.body.token || ctx.query.token
    })
    const userId = userTokenObj.userId
    //根据用户id 查询当前用户分类
    const classifyArr = await ctx.service.notes.classify.queryClassify({userId})
    let classify = classifyArr[0].classify
    if (classify.indexOf(classifyName) !== -1) {
      return '分类名称已存在'
    }
    classify.push(classifyName)
    //保存
    return await ctx.model.Notes.Classify.updateOne({
      userId
    }, {
      classify
    }).then(res => {
      console.log(userTokenObj, userId, classify, res)
      return true
    }).catch(err => {
      return '新增分类出错'
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
      return '查询分类出错'
    })
  }

}

module.exports = ClassifyService;

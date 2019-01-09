'use strict';

const Controller = require('egg').Controller;



class ClassifyController extends Controller {
  //新增一个分类
  async add(){
    const {ctx} = this;
    const {classifyName} = ctx.query
    const res = await ctx.service.notes.classify.addClassify({classifyName})
    if (res===true){
      return ctx.success()
    }
    return ctx.error(res)
  }
  //删除分类
  async delete(){
    const {ctx} = this;
    ctx.success('哈哈')
  }
  //修改一个分类
  async edit(){
    const {ctx} = this;
    ctx.success('哈哈')
  }
  //查询分类
  async query(){
    const {ctx} = this;
    ctx.success('哈哈')
  }
}

module.exports = ClassifyController;

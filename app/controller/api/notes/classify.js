'use strict';

const Controller = require('egg').Controller;



class ClassifyController extends Controller {
  //新增一个分类
  async add(){
    const {ctx} = this;
    const {classifyName} = ctx.query
    ctx.body = await ctx.service.notes.classify.addClassify({classifyName})
  }
  //删除分类
  //修改一个分类
  //查询分类
  async query(){

  }
}

module.exports = ClassifyController;

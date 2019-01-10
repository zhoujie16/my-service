'use strict';

const Controller = require('egg').Controller;

class SpeechRecognitionController extends Controller {
  async test() {
    const {ctx} = this;
    const res = await this.service.speechRecognition.test()
    return ctx.success(res)
    if (res===true){
      return ctx.success()
    } else {
      return ctx.error('语音识别失败')
    }
  }
  async callback(){
    const {ctx} = this;
    let d = {}
    if (ctx.request.method==='GET'){
      d = ctx.query
    } else if (ctx.request.method==='POST') {
      d = ctx.request.body
    }
    const res = await this.service.speechRecognition.callback(d)
    if (res===true){
      return ctx.success()
    }
    return ctx.success(d)
  }
}

module.exports = SpeechRecognitionController;

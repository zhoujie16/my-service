//语音识别服务
const Service = require('egg').Service;


class SpeechRecognitionService extends Service {
  async test() {
    const {ctx} = this
    const result = await ctx.curl('https://aai.qcloud.com/asr/v1/1257623052', {
      method: 'POST',
      // 通过 contentType 告诉 HttpClient 以 JSON 格式发送
      contentType: 'json',
      data: {
        // projectid: ``,
        sub_service_type: 0,
        engine_model_type: `16k_0`,
        callback_url: ``,
        res_text_format: 0,
        res_type: 1,
        source_type: 0,
        url: `http://host811178018.s486.pppf.com.cn/public/test.mp3`,
        secretid: ``,
        timestamp: parseInt(new Date().getTime() / 1000),
        expired: parseInt(new Date(new Date().getTime() + 1000 * 60 * 60 * 24).getTime() / 1000),
        nonce: parseInt(new Date().getTime() / 1000),
      },
      // 明确告诉 HttpClient 以 JSON 格式处理返回的响应 body
      // dataType: 'json',
    });
    return result.data
    // return true
  }

  async callback(d) {
    return await this.service.sendEmail.sendEmail({
      email: 'zhoujie16m@163.com',
      subject: '语音识别结果',
      html: JSON.stringify(d)
    })
  }
}

module.exports = SpeechRecognitionService;

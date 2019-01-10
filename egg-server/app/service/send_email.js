const Service = require('egg').Service;
const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
  service: 'qq', // no need to set host or port etc.
  auth: {
    user: '1406187962@qq.com',
    // 这里密码不是qq密码，是你设置的smtp授权码
    pass: 'nsiwmysgzpqcfejb',
  }
});

class SendEmailService extends Service {
  async sendEmail({email,subject,html}) {
    const {ctx} = this

    let mailOptions = {
      from: '"zhoujie_service " <1406187962@qq.com>', // sender address
      to: email, // list of receivers
      subject, // Subject line
      // text: 'text', // plain text body
      html // html body
    };

    return new Promise((resolve, reject) => {
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log(error);
          reject(error)
        }
        console.log('Message sent: %s', info.messageId);
        resolve(true)
        // Message sent: <04ec7731-cc68-1ef6-303c-61b0f796b78f@qq.com>
      });
    })

  }
}

module.exports = SendEmailService;

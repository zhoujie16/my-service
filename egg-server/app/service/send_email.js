const Service = require('egg').Service;
const nodemailer = require('nodemailer');


class SendEmailService extends Service {

  async sendEmail() {
    const {ctx} = this
    var transporter = nodemailer.createTransport({
      service: '163',
      auth: {
        user: 'zhoujie16m@163.com',
        pass: '1472580369'
      }
    });
    var mailOptions = {
      from: 'zhoujie16m ', // sender address
      to: 'zhoujie16m@163.com', // list of receivers
      subject: 'Hello ✔', // Subject line
      text: 'Hello world ✔', // plaintext body
      html: '<b>Hello world ✔</b>' // html body
    };
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error)
        return error
      } else {
        console.log('Message sent: ' + info.response);
        return true
      }
    });
  }
}

module.exports = SendEmailService;

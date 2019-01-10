'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const {router, controller} = app;
  router.get('/', controller.home.index);
  //发送邮件
  router.get('/api/sendEmail', controller.api.sendEmail.sendEmail);
  router.get('/api/speechRecognition', controller.api.speechRecognition.test);
  router.get('/api/speechRecognitionSuccessCallback', controller.api.speechRecognition.callback);
  router.post('/api/speechRecognitionSuccessCallback', controller.api.speechRecognition.callback);
  //获取北京时间
  router.get('/api/getbjtime', controller.api.time.getBJtime);
  //登录
  router.get('/login', controller.api.login.login);
  router.post('/login', controller.api.login.login);
  //用户注册
  router.post('/api/user/addUser', controller.api.user.add);
  /* notes */
  //分类
  router.post('/api/notes/addClassify', controller.api.notes.classify.add);
  router.post('/api/notes/queryClassify', controller.api.notes.classify.query);
  //笔记
  router.post('/api/notes/addNote', controller.api.notes.note.add);
  router.post('/api/notes/queryNote', controller.api.notes.note.query);
  router.post('/api/notes/editNote', controller.api.notes.note.edit);

};

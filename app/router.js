'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  // notes
  // router.get('/api/notes/user', controller.api.time.getBJtime);
  router.get('/api/getbjtime', controller.api.time.getBJtime);
  //notes 分类
  router.get('/api/notes/addClassify', controller.api.notes.classify.add);
  router.post('/api/notes/addClassify', controller.api.notes.classify.add);
  router.post('/api/notes/queryClassify', controller.api.notes.classify.query);
  //笔记
  router.post('/api/notes/addNote', controller.api.notes.note.add);
};

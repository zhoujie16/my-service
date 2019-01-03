'use strict';

// had enabled by egg
// exports.static = true;
//arttemplate 模板引擎
exports.arttemplate = {
  enable: true,
  package: 'egg-view-arttemplate',
};
//mongoose
exports.mongoose = {
  enable: true,
  package: 'egg-mongoose',
};
//允许跨域
exports.cors = {
  enable: true,
  package: 'egg-cors',
};

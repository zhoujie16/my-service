'use strict';

module.exports = appInfo => {
  const config = exports = {};
  // const mongoDBBaseUrl = 'mongodb://zhoujie16.cn:27017'
  const mongoDBBaseUrl = 'localhost:27017'

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1546483170019_238';

  // add your config here
  config.middleware = ['checkToken'];

  config.session = {
    key: 'SESSION_ID',   //设置session cookie里面的key
    maxAge: 24 * 3600 * 1000,
    httpOnly: true,
    encrypt: true,
    renew: true   //renew等于true  那么每次刷新页面的时候 session都会被延期
  }
  config.view = {
    mapping: {
      '.html': 'arttemplate',
    },
  };
  config.mongoose = {
    clients: {
      zhoujie_service: {
        url: `mongodb://${mongoDBBaseUrl}/zhoujie_service`,
        options: {
          auth: {"authSource": "admin"},
          user: "zhoujie",
          pass: "qwer0926",
          // poolSize: 10
        },
      },
      note_service: {
        url:`mongodb://${mongoDBBaseUrl}/note_service`,
        options: {
          auth: {"authSource": "admin"},
          user: "zhoujie",
          pass: "qwer0926",
          // poolSize: 10
        },
      },
    },
  };

  config.cors = {
    origin: '*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',
    credentials: true,
  };

  config.security = {
    csrf: {
      enable: false,
    }
  };

  return config;
};

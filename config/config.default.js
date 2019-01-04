'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1546483170019_238';

  // add your config here
  config.middleware = [];

  config.view = {
    mapping: {
      '.html': 'arttemplate',
    },
  };
  exports.mongoose = {
    clients: {
      zhoujie_service: {
        url: 'mongodb://zhoujie16.cn:27017/zhoujie_service',
        options: {
          auth: {"authSource": "admin"},
          user: "zhoujie",
          pass: "qwer0926",
          // poolSize: 10
        },
      },
      note_service: {
        url: 'mongodb://zhoujie16.cn:27017/note_service',
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
  };

  config.security = {
    csrf: {
      enable: false,
    }
  };

  return config;
};

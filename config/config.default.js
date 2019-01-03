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
  config.mongoose = {
    url: 'mongodb://13.209.21.102:27017/zhoujie_service',
    options: {
      auth: {"authSource": "admin"},
      user: "zhoujie",
      pass: "qwer0926",
      // poolSize: 10
    },
  };

  return config;
};

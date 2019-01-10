// {app_root}/app/model/notes/user.js
//用户
module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const conn = app.mongooseDB.get('zhoujie_service');

  const UserSchema = new Schema({
    userCode: {type: String},
    userName: {type: String},
    email: {type: String},
    password: {type: String}
  });

  return conn.model('User', UserSchema);
}

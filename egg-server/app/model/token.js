//token
module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const conn = app.mongooseDB.get('zhoujie_service');

  const TokenSchema = new Schema({
    userId: {type: String},
    userCode: {type: String},
    token: {type: String},
  });

  return conn.model('Token', TokenSchema);
}

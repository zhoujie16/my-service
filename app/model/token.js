//token
module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const conn = app.mongooseDB.get('zhoujie_service');

  const TokenSchema = new Schema({
    userCode: {type: String},
    token: {type: String},
  });

  return conn.model('Token', TokenSchema);
}

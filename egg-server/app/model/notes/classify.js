// {app_root}/app/model/notes/classify.js
//分类
module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const conn = app.mongooseDB.get('note_service');

  const ClassifySchema = new Schema({
    userId: {type: String},
    userCode: {type: String},
    classify: {type: Array, default: ['默认分组']},
  });

  return conn.model('Classify', ClassifySchema);
}

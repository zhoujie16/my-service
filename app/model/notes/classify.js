// {app_root}/app/model/notes/classify.js
//分类
module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const conn = app.mongooseDB.get('note_service');

  const ClassifySchema = new Schema({
    classifyName: {type: String},
  });

  return conn.model('Classify', ClassifySchema);
}

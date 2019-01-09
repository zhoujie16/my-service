//笔记
module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const conn = app.mongooseDB.get('note_service');

  const NoteSchema = new Schema({
    userName: {type: String},
    note: {type: String},
    classifyName: {type: String, default: '默认分组'},
    ceateTimestamp: {type: Number},
    updateTimestamp: {type: Number},
    ceateTime: {type: String},
    updateTime: {type: String},
    address: {type: String},
  });

  return conn.model('Note', NoteSchema);
}

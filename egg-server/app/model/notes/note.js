//笔记
module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const conn = app.mongooseDB.get('note_service');

  const NoteSchema = new Schema({
    userName: {type: String},
    note: {type: String},
    ceateTimestamp: {type: Number},
    updateTimestamp: {type: Number},
    ceateTime: {type: String},
    updateTime: {type: String},
    address: {type: String},
  });

  return conn.model('Note', NoteSchema);
}

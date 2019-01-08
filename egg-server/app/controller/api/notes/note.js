'use strict';

const Controller = require('egg').Controller;

class NoteController extends Controller {
  async add() {
    const {ctx} = this;
    const {note,ceateTimestamp} = ctx.query
    ctx.body = await ctx.service.notes.note.addNote({note,ceateTimestamp})
  }
  async query(){
    const {ctx} = this;
    ctx.body = await ctx.service.notes.note.queryNote()
  }
}

module.exports = NoteController;

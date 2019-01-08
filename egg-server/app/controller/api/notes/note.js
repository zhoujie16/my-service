'use strict';

const Controller = require('egg').Controller;

class NoteController extends Controller {
  async add() {
    const {ctx} = this;
    const {note,ceateTimestamp} = ctx.request.body
    ctx.body = await ctx.service.notes.note.addNote({note,ceateTimestamp})
  }
  async query(){
    const {ctx} = this;
    const {_id} = ctx.request.body
    ctx.body = await ctx.service.notes.note.queryNote({_id})
  }
}

module.exports = NoteController;

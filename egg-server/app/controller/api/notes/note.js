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
    async edit(){
        const {ctx} = this;
        const {_id,note} = ctx.request.body
        ctx.body = await ctx.service.notes.note.editNote({_id,note})
    }
}

module.exports = NoteController;

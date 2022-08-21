const mongoose = require('mongoose')
const NoteSchema = require('./note')

const Note = mongoose.model('notes', NoteSchema)

module.exports = {
  Note
}

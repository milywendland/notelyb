const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Note = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: false }
  },
  { timestamps: true }
)

module.exports = Note

const res = require('express/lib/response')
const { Note } = require('../models/index')

const getAllNotes = async (req, res) => {
  try {
    const notes = await Note.find()
    return res.status(200).json({ notes })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getNote = async (req, res) => {
  try {
    const { id } = req.params
    const note = await Note.findById(id)
    if (note) {
      return res.status(200).json({ note })
    }
    return res.status(404).send('Note does not exist')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  getAllNotes,
  getNote
}

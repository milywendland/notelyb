const { Router } = require('express')
const controllers = require('../controllers/NotesController')
const router = Router()

router.get('/', (req, res) => res.send('this is root'))

router.get('/notes', controllers.getAllNotes)

router.get('/notes/details/:id', controllers.getNote)

module.exports = router

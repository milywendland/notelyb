const db = require('../db')
const { Note } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))
const main = async () => {
  const notes = [
    {
      name: 'My First Note',
      description: 'This is my first note!'
    },

    {
      name: 'Second Note',
      description: 'This is my second note!',
      image:
        'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80'
    },

    {
      name: 'Third Note',
      description: 'I need to get a dev job',
      image:
        'https://images.unsplash.com/photo-1504805572947-34fad45aed93?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
    }
  ]
  await Note.insertMany(notes)

  console.log('Created Notes!')
}

const run = async () => {
  await main()
  db.close()
}

run()

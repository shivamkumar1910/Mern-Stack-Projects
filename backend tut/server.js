const express = require('express')
const app = express()
app.use(express.json())

const notes = [] // In-memory storage for notes

app.post('/notes', (req, res) => {
  // Handle POST request to create a new note
  const note = req.body;
  notes.push(note);
  res.status(201).send(note);
})

app.get('/notes', (req, res) => {
  // Handle GET request to retrieve all notes
  res.send(notes);
})


app.listen(3000, () => {
  console.log('Server is running on port 3000');
})
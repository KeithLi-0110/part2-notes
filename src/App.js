import React, { useState } from 'react'
import Note from './components/Note'

const App = (props) => {
  const [notes, setNotes] = useState(props.notes)
  const [newNote, setNewNote] = useState(
    'a new note...'
  )
  const addNote = (event) => {
    event.preventDefault()
    const noteObject = {
      content: newNote,
      important: Math.random() < 0.5,
      id: notes.lenght + 1
    }

    setNotes(notes.concat(noteObject))
    setNewNote('')

  }
  const handlenotechange = (event) => {
    event.preventDefault()
    console.log(event.target.value)
    setNewNote(event.target.value)

  }
  return (
    <div>
      <h1>Notes</h1>
      <ul>
        <ul>
          {notes.map(note =>
            <Note key={note.id} note={note} />
          )}
        </ul>
        <form onSubmit={addNote}>
          <button type='submit'>save</button>
        </form>
      </ul>
    </div>
  )
}

export default App

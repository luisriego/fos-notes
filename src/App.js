import { useEffect, useState } from 'react'
import Note from './components/Note'
import FormNote from './components/formNote'
import notesServices from './services/data'

const App = () => {
  const [notes, setNotes] = useState([])
  const [showAll, setShowAll] = useState(true)

  useEffect(() => {
    notesServices.getNotes().then(initialsNotes => {
      setNotes(initialsNotes)
    })
  }, [])

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map(note =>
          <Note key={note.id} note={note} />
        )}
      </ul>
        <FormNote notes={notes} setNotes={setNotes} />
    </div>
  )
}

export default App

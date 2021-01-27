import React, { useState, useEffect } from 'react';
import Note from './components/Note';
import noteService from './services/notes';



const App = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');
  const [showAll, setShowAll] = useState(true);

  useEffect(() => {
    console.log('effect');
    noteService
      .getAll()
      .then(data => {
        console.log('promise fulfilled');
        setNotes(data);
      });
  }, []);
  console.log('render', notes.length, 'notes');

  const addNote = (event) => {
    event.preventDefault()
    const noteObject = {
      content: newNote,
      date: new Date(),
      important: Math.random() < 0.5
    }
    noteService
      .create(noteObject)
      .then(data => {
        setNotes(notes.concat(data));
        setNewNote('');
        console.log(data);
      })
  }

  const handleNoteChange = (event) => {
    setNewNote(event.target.value)
  }

  const notesToShow = showAll
    ? notes
    : notes.filter(note => note.important === true);

  const toggleImportanceOf = (id) => {
    const url = `http://localhost:3001/notes/${id}`;
    const note = notes.find(n => n.id === id);
    const changedNote = {...note, important: !note.important};


    noteService
      .update(id, changedNote)
      .then(data => {
        setNotes(notes.map(n => n.id === id ? data : n));
      })
      .catch(err => {
        alert(`the note '${note.content}' was already deleted from server`);
        setNotes(notes.filter(n => n.id !== id));
      });
  }
  

  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all' }
        </button>
      </div>
      <ul>
        {
          notes.map(note => 
            <Note 
              key={note.id} 
              note={note}
              toggleImportance={() => toggleImportanceOf(note.id)}
            />
          )
        }
      </ul>
      <form onSubmit={addNote}>
        <input 
          value={newNote} 
          onChange={handleNoteChange}
        />
        <button type="submit">save</button>
      </form>
    </div>
  );
}

export default App;
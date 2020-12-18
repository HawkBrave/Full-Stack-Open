import React, { useState } from 'react';

const Contact = ({ person }) => {
  return (
    <li>
      {person.name}
    </li>
  );
}


function App() {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')

  const handleInputChange = (event) => {
    setNewName(event.target.value);
  }

  const addPerson = (event) => {
    event.preventDefault();
    const newPerson = {
      name: newName
    };
    if (persons.includes(persons.filter(p => p.name == newPerson.name))) {
      alert('no');
    } else {
      setPersons(persons.concat(newPerson))
    }
    setNewName('');
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleInputChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {
          persons.map(p => <Contact key={p.id} person={p}/>)
        }
      </ul>
    </div>
  )
}

export default App;

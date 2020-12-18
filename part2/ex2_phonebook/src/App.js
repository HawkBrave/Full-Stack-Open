import React, { useState } from 'react';

const Contact = ({ person }) => {
  return (
    <li>
      {person.name} {person.number}
    </li>
  );
}


function App() {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523'},
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]);
  const [ newName, setNewName ] = useState('');
  const [ newNumber, setNewNumber ] = useState('');
  const [ search, setSearch ] = useState('');

  const handleInputChange = (func) => (event) => {
    func(event.target.value);
  }

  const searchResults = () => {
    if (search === "") {
      return persons.map(p => <Contact key={p.id} person={p}/>)
    } else {
      return persons.filter(p => p.name.includes(search)).map(p => <Contact key={p.id} person={p}/>);
    }
  }

  const addPerson = (event) => {
    event.preventDefault();
    const newPerson = {
      name: newName,
      number: newNumber
    };
    if (persons.includes(...persons.filter(p => p.name === newPerson.name))) {
      alert('no');
    } else {
      setPersons(persons.concat(newPerson))
    }
    setNewName('');
    setNewNumber('');
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with <input value={search} onChange={handleInputChange(setSearch)}/>
      </div>
      <h2>add a new</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleInputChange(setNewName)}/>
        </div>
        <div>
          number: <input value={newNumber} onChange={handleInputChange(setNewNumber)}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {
          searchResults()
        }
      </ul>
    </div>
  )
}

export default App;

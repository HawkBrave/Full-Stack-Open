import React, { useState } from 'react';
import Filter from './components/Filter';
import Persons from './components/Persons';
import PersonForm from './components/PersonForm';

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

  const handleChange = (func) => (event) => {
    func(event.target.value);
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter 
        handleChange={handleChange}
        setSearch={setSearch}
      /> 
      <h2>add a new</h2>
      <PersonForm 
        handleChange={handleChange}
        persons={persons} 
        setPersons={setPersons} 
        newName={newName}
        setNewName={setNewName}
        newNumber={newNumber}
        setNewNumber={setNewNumber}
      /> 
      <h2>Numbers</h2>
      <Persons 
        persons={persons} 
        search={search}
      /> 
    </div>
  );
}

export default App;

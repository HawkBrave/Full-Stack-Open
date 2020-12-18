import React, { useState, useEffect } from 'react';
import Filter from './components/Filter';
import Persons from './components/Persons';
import PersonForm from './components/PersonForm';
import personService from './services/persons';

function App() {
  // const [ persons, setPersons ] = useState([
  //   { name: 'Arto Hellas', number: '040-123456' },
  //   { name: 'Ada Lovelace', number: '39-44-5323523'},
  //   { name: 'Dan Abramov', number: '12-43-234345' },
  //   { name: 'Mary Poppendieck', number: '39-23-6423122' }
  // ]);
  const [ persons, setPersons ] = useState([]);
  const [ newName, setNewName ] = useState('');
  const [ newNumber, setNewNumber ] = useState('');
  const [ search, setSearch ] = useState('');

  useEffect(() => {
     personService
      .getAll()
      .then(data => setPersons(data))
      .catch(err => console.log(err));
  }, []);

  const handleChange = (func) => (event) => {
    func(event.target.value);
  }

  const addPerson = (event) => {
    event.preventDefault();
    const newPerson = {
      name: newName,
      number: newNumber
    };
    if (persons.includes(...persons.filter(p => p.name === newPerson.name))) {
      alert('You cannot add the same person.');
    } else {
      personService
        .create(newPerson)
        .then(data => {
          setPersons(persons.concat(data))
        });
    }
    setNewName('');
    setNewNumber('');
  }

  const deletePerson = id => {
    personService
      .del(id)
      .then(data => {
        setPersons(persons.filter(p => p.id !== id));
      })
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
        addPerson={addPerson}
        newName={newName}
        setNewName={setNewName}
        newNumber={newNumber}
        setNewNumber={setNewNumber}
        handleChange={handleChange}
      /> 
      <h2>Numbers</h2>
      <Persons 
        persons={persons} 
        search={search}
        handleClick={deletePerson}
      /> 
    </div>
  );
}

export default App;

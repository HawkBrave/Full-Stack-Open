import React, { useState, useEffect } from 'react';
import Filter from './components/Filter';
import Persons from './components/Persons';
import PersonForm from './components/PersonForm';
import personService from './services/persons';

function App() {
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
    const [check] = persons.filter(p => p.name.toLowerCase() === newPerson.name.toLowerCase());
    if (persons.includes(check)) {
      if (window.confirm("There's already a person with the same name, do you want to update the phone number?")) {
        personService
          .update(newPerson, check.id)
          .then(data => {
            setPersons(persons.map(p => p.id === check.id ? data : p));
          });
      }
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
    if (window.confirm(`Do you want to delete ${persons.filter(p => p.id === id)[0].name} from your phonebook?`)) {
      personService
        .del(id)
        .then(data => {
          setPersons(persons.filter(p => p.id !== id));
        })
    } 
  }

  return (
    <div>
      <h1>Phonebook</h1>
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

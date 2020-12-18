import React from 'react';

const PersonForm = ({ newName, setNewName, newNumber, setNewNumber, persons, setPersons, handleChange}) => {
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
    <form onSubmit={addPerson}>
      <div>
        name: <input value={newName} onChange={handleChange(setNewName)}/>
      </div>
      <div>
        number: <input value={newNumber} onChange={handleChange(setNewNumber)}/>
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
}

export default PersonForm;
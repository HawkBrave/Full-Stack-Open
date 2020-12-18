import React from 'react';

const PersonForm = ({ addPerson, newName, setNewName, newNumber, setNewNumber, handleChange }) => {
  
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
import React from 'react';
import Person from './Person';

const Persons = ({ persons, search }) => {
  const display = () => {
    if (search !== "") {
      return persons.filter(p => p.name.toLowerCase().includes(search.toLowerCase()))
        .map(p => (<Person key={p.id} person={p}/>));
    } else {
      return persons.map(p => (<Person key={p.id} person={p}/>));
    }
  }
  return (
    <ul>
      {display()}
    </ul>
  );
}

export default Persons;
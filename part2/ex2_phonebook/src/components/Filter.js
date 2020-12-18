import React, { useState } from 'react';

const Filter = ({ handleChange, search, setSearch}) => {
  return (
    <div>
      filter shown with <input value={search} onChange={handleChange(setSearch)}/>
    </div>
  );
}

export default Filter
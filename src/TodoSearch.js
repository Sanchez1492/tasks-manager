import React from 'react';
import './TodoSearch.css'

function TodoSearch ({
  searchValue, setSearchValue
}) {

    return (
      <input
      placeholder="Add new task" 
      value={searchValue}
      onChange={(event) => {
        setSearchValue(event.target.value)
      }}/>
    );
}

export { TodoSearch }
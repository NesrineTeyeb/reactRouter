// src/Filter.js
import React from "react";

const Filter = (props) => {
  //destructor de nos champs dans app.js pour pouvoir accéder à nos state de filter
  const { filterByTitle, filterByNote, setFilterByTitle, setFilterByNote } = props;
  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Filter by title"
        value={filterByTitle}
        onChange={(e) => setFilterByTitle(e.target.value)}
      />
      <input
        type="number"
        placeholder="Filter by Note"
        value={filterByNote}
        onChange={(e) => setFilterByNote(e.target.value)}
      />
    </div>
  );
};

export default Filter;

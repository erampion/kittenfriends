import React from "react";

const SearchBox = ({searchField, searchChange}) => {
  return (
    <div className="pa2">
      <input
        className="pa2 br2 b--gray bg-light-gray" 
        type="search" 
        placeholder="Search Kittens"
        onChange={searchChange}
      />
    </div>
  );
}


export default SearchBox;
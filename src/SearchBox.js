
import React from 'react';

const SearchBox = ({ searchValue }) => {
  return (
    <div className='bb bw1 b--dark-gray pa3 mb2'>
      <input 
        className='pa3 ba b--dark-gray bg-lightest-blue'
        type='search' 
        placeholder='search robots'
        onChange={searchValue}
      />
    </div>
  );
}


export default SearchBox;
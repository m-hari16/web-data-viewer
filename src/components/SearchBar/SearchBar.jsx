import React, { useState } from 'react';
import './index.css'

function SearchBar({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault()
    onSearch(searchQuery);
  };

  return (
    <>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </>
  );
}

export default SearchBar;
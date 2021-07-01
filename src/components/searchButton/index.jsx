import React from 'react';
import SearchIcon from '../../images/searchIcon.svg';

function searchButton({ setSearchBar }) {
  return (
    <button
      type="button"
      onClick={ () => setSearchBar((prevSearchBar) => !prevSearchBar) }
    >
      <img src={ SearchIcon } alt="search-icon" data-testid="search-top-btn" />
    </button>
  );
}

export default searchButton;

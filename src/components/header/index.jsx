import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { string } from 'prop-types';
import ProfileIcon from '../../images/profileIcon.svg';
import SearchIcon from '../../images/searchIcon.svg';
import SearchBar from '../searchBar/SearchBar';

function Header({ pageTitle }) {
  const [searchBar, setSearchBar] = useState(false);
  return (
    <div>
      <Link to="/perfil">
        <img src={ ProfileIcon } alt="profile-icon" data-testid="profile-top-btn" />
      </Link>
      <h1 data-testid="page-title">{pageTitle}</h1>
      <button
        type="button"
        onClick={ () => setSearchBar((prevSearchBar) => !prevSearchBar) }
      >
        <img src={ SearchIcon } alt="search-icon" data-testid="search-top-btn" />
      </button>
      {searchBar ? <SearchBar /> : null}

    </div>
  );
}

Header.propTypes = {
  pageTitle: string.isRequired,
};
export default Header;

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { string } from 'prop-types';
import ProfileIcon from '../../images/profileIcon.svg';

import SearchBar from '../searchBar/SearchBar';
import SearchButton from '../searchButton';

function Header({ pageTitle }) {
  const [searchBar, setSearchBar] = useState(false);
  const [searchIcon, setSearchIcon] = useState(true);

  function showSearchIcon() {
    if (pageTitle === 'Perfil') {
      return setSearchIcon(false);
    }
    return setSearchIcon(true);
  }
  useEffect(() => {
    showSearchIcon();
  }, [pageTitle]);
  return (
    <div>
      <Link to="/perfil">
        <img src={ ProfileIcon } alt="profile-icon" data-testid="profile-top-btn" />
      </Link>
      <h1 data-testid="page-title">{pageTitle}</h1>
      {searchIcon ? <SearchButton setSearchBar={ setSearchBar } /> : null }
      {searchBar ? <SearchBar /> : null}

    </div>
  );
}


Header.propTypes = {
  pageTitle: string.isRequired,
};
export default Header;




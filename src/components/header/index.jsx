import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { string, shape } from 'prop-types';
import ProfileIcon from '../../images/profileIcon.svg';

import SearchButton from '../searchButton';
import SearchBar from '../SearchBar';

function Header({ pageTitle, location }) {
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
      {searchBar ? <SearchBar location={ location } /> : null}

    </div>
  );
}

Header.propTypes = {
  pageTitle: string.isRequired,
  location: shape({
    pathname: string,
  }).isRequired,
};

export default Header;

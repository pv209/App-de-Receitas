import React from 'react';
import { string } from 'prop-types';
import ProfileIcon from '../../images/profileIcon.svg';
import SearchIcon from '../../images/searchIcon.svg';

function Header({ pageTitle }) {
  return (
    <div>
      <img src={ ProfileIcon } alt="profile-icon" data-testid="profile-top-btn" />
      <h1 data-testid="page-title">{pageTitle}</h1>
      <img src={ SearchIcon } alt="search-icon" data-testid="search-top-btn" />
    </div>
  );
}

Header.propTypes = {
  pageTitle: string.isRequired,
};
export default Header;

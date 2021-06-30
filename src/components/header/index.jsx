import React from 'react';
import Button from '../shared/button/index';

function index() {
  return (
    <div>
      <Button dataTestid="profile-top-btn" type="button" name="profile" />
      <h1 data-testid="page-title">App Receitas</h1>
      <Button dataTestid="search-top-btn" type="button" name="search" />
    </div>
  );
}
//a

export default index;

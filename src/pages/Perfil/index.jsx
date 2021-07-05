import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/footer';
import Button from '../../components/shared/button';
import Header from '../../components/header';

function Perfil() {
  const storage = localStorage.getItem('user');
  const { email } = storage ? JSON.parse(storage) : '@gmail.com';

  function resetLocalStorege() {
    localStorage.clear();
  }

  return (
    <>
      <Header pageTitle="Perfil" />
      <span
        data-testid="profile-email"
      >
        {email !== '' ? email : 'NeymarJunior@gmail.com'}
      </span>
      <Link to="/receitas-feitas">
        <Button
          dataTestid="profile-done-btn"
          name="Receitas Feitas"
        />
      </Link>
      <Link to="/receitas-favoritas">
        <Button
          dataTestid="profile-favorite-btn"
          name="Receitas Favoritas"
        />
      </Link>
      <Link to="/">
        <Button
          onClick={ resetLocalStorege }
          dataTestid="profile-logout-btn"
          name="Sair"
        />
      </Link>
      <Footer />
    </>
  );
}

export default Perfil;

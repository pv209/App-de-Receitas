import React from 'react';
import Footer from '../../components/footer';
import Button from '../../components/shared/button';

function Perfil() {
  return (
    <>
      <span
        data-testid="profile-email"
      >
        NeymarJunior@gmail.com
      </span>
      <Button
        dataTestid="profile-done-btn"
        name="Receitas Feitas"
      />
      <Button
        dataTestid="profile-favorite-btn"
        name="Receitas Favoritas"
      />
      <Button
        dataTestid="profile-logout-btn"
        name="Sair"
      />
      <Footer />
    </>
  );
}

export default Perfil;

import React from 'react';
import Footer from '../../components/footer';
import Button from '../../components/shared/button';

function Perfil() {
  const storage = localStorage.getItem('user');
  const { email } = storage ? JSON.parse(storage) : '@gmail.com';
  return (
    <>
      <span
        data-testid="profile-email"
      >
        {email !== '' ? email : 'NeymarJunior@gmail.com'}
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

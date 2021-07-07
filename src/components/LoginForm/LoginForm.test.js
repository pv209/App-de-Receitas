// import userEvent from '@testing-library/user-event';
import React from 'react';
import renderWithRouter from '../../tests/renderWithRouter';
import LoginForm from './index';

describe('Testa o componente "LoginForm"', () => {
  // it('Testa se a tela tem um input para o email', () => {
  //   const { getByTestId } = renderWithRouter(<LoginForm />);

  //   const inputEmail = getByTestId('email-input');
  //   userEvent.type(inputEmail, 'exemplo@exemplo.com');

  //   expect(inputEmail).toBeInTheDocument();
  //   expect(inputEmail).toHaveValue('exemplo@exemplo.com');
  // });

  // it('Testa se a tela tem um input para senha', () => {
  //   const { getByTestId } = renderWithRouter(<LoginForm />);

  //   const inputPassword = getByTestId('password-input');
  //   userEvent.type(inputPassword, '123456789');

  //   expect(inputPassword).toBeInTheDocument();
  //   expect(inputPassword).toHaveValue('123456789');
  // });

  it('Testa se a tela tem um botão para login', () => {
    const { getByTestId } = renderWithRouter(<LoginForm />);

    const inputPassword = getByTestId('login-submit-btn');
    expect(inputPassword).toBeInTheDocument();
  });
  it('Testa se o botão está desabilitado quando carrega a tela', () => {
    const { getByTestId } = renderWithRouter(<LoginForm />);

    const inputPassword = getByTestId('login-submit-btn');
    expect(inputPassword).toBeDisabled();
  });
});

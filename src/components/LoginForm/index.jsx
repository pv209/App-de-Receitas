import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import Input from '../shared/input';
import Button from '../shared/button';
import { propsButton, propsEmailInput, propsPasswordInput } from './data';
import { emailVerification, passwordVerification } from '../../utils/validations';
import { setTokensToLocalStorage,
  setEmailToLocalStorage }
  from '../../utils/setLocalStorage';

export default function LoginForm() {
  const [buttonDisable, setButtonDisable] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);

  function handleChange(event, setState) {
    const { target: { value } } = event;
    setState(value);
    const verifications = emailVerification(email) && passwordVerification(password)
      ? setButtonDisable(false)
      : setButtonDisable(true);
    return verifications;
  }

  function handleSubmit(event) {
    event.preventDefault();
    setTokensToLocalStorage();
    setEmailToLocalStorage(email);
    setRedirect(true);
  }

  if (redirect) {
    return <Redirect to="/comidas" />;
  }

  return (
    <form>
      <Input
        { ...propsEmailInput }
        onChange={ (event) => handleChange(event, setEmail) }
      />
      <Input
        { ...propsPasswordInput }
        onChange={ (event) => handleChange(event, setPassword) }
      />
      <Button { ...propsButton } disabled={ buttonDisable } onClick={ handleSubmit } />
    </form>
  );
}

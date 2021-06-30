import React, { useState } from 'react';
import Input from '../shared/input';
import Button from '../shared/button';
import { propsButton, propsEmailInput, propsPasswordInput } from './data';
import { emailVerification, passwordVerification } from '../../utils/validations';

export default function LoginForm() {
  const [buttonDisable, setButtonDisable] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleChange(event, setState) {
    const { target: { value } } = event;
    setState(value);
    const verifications = emailVerification(email) && passwordVerification(password)
      ? setButtonDisable(false)
      : setButtonDisable(true);
    return verifications;
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
      <Button { ...propsButton } disabled={ buttonDisable } />
    </form>
  );
}

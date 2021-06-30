import React from 'react';
import Input from '../shared/input';
import Button from '../shared/button';
import { propsButton, propsEmailInput, propsPasswordInput } from './data';

export default function LoginForm() {
  return (
    <form>
      <Input { ...propsEmailInput } />
      <Input { ...propsPasswordInput } />
      <Button { ...propsButton } />
    </form>
  );
}

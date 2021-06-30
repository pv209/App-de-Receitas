import React from 'react';
import { bool, string } from 'prop-types';

function Input({ name, type, dataTestid, placeholder, ariaLabel, required }) {
  return (
    <input
      name={ name }
      type={ type }
      data-testid={ dataTestid }
      placeholder={ placeholder }
      aria-label={ ariaLabel }
      required={ required }
    />
  );
}

Input.propTypes = {
  name: string.isRequired,
  type: string.isRequired,
  dataTestid: string,
  placeholder: string.isRequired,
  ariaLabel: string.isRequired,
  required: bool,
};

Input.defaultProps = {
  dataTestid: '',
  required: false,
};

export default Input;

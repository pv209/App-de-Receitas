import React from 'react';
import { bool, func, string } from 'prop-types';

function Input({ name, type, dataTestid, placeholder, ariaLabel, required, onChange }) {
  return (
    <input
      name={ name }
      type={ type }
      data-testid={ dataTestid }
      placeholder={ placeholder }
      aria-label={ ariaLabel }
      required={ required }
      onChange={ onChange }
    />
  );
}

Input.propTypes = {
  name: string.isRequired,
  type: string.isRequired,
  dataTestid: string,
  placeholder: string.isRequired,
  ariaLabel: string.isRequired,
  required: bool.isRequired,
  onChange: func,
};

Input.defaultProps = {
  dataTestid: '',
  onChange: '',
};

export default Input;

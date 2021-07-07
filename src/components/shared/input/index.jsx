import React from 'react';
import { bool, func, string } from 'prop-types';

function Input({ onChange, id, name, type, textLabel,
  dataTestid, placeholder, value, ariaLabel, required, inputLabel }) {
  if (inputLabel) {
    return (
      <label htmlFor={ id }>
        { textLabel }
        <input
          name={ name }
          type={ type }
          id={ id }
          data-testid={ dataTestid }
          placeholder={ placeholder }
          required={ required }
          onChange={ onChange }
          value={ value }
        />
      </label>
    );
  }
  return (
    <input
      name={ name }
      type={ type }
      data-testid={ dataTestid }
      placeholder={ placeholder }
      aria-label={ ariaLabel }
      required={ required }
      onChange={ onChange }
      value={ value }
    />
  );
}

Input.propTypes = {
  name: string.isRequired,
  type: string.isRequired,
  dataTestid: string,
  placeholder: string.isRequired,
  ariaLabel: string,
  value: string,
  id: string,
  onChange: func,
  required: bool,
  inputLabel: bool,
  textLabel: string.isRequired,
};

Input.defaultProps = {
  dataTestid: '',
  required: false,
  ariaLabel: '',
  id: '',
  onChange: '',
  value: '',
  inputLabel: false,
};

export default Input;

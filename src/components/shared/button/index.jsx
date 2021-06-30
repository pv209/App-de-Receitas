import React from 'react';
import { bool, string } from 'prop-types';

function Button({ dataTestid, name, type, disabled }) {
  return (
    <button
      data-testid={ dataTestid }
      disabled={ disabled }
      type={ type === 'submit' ? 'submit' : 'button' }
    >
      {name}
    </button>
  );
}

Button.propTypes = {
  dataTestid: string,
  name: string.isRequired,
  type: string.isRequired,
  disabled: bool,
};

Button.defaultProps = {
  dataTestid: '',
  disabled: false,
};

export default Button;

import React from 'react';
import { bool, string, func } from 'prop-types';

function Button({ dataTestid, name, type, disabled, onClick, className }) {
  return (
    <button
      data-testid={ dataTestid }
      disabled={ disabled }
      type={ type === 'submit' ? 'submit' : 'button' }
      onClick={ onClick }
      className={ className }
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
  onClick: func,
  className: string,
};

Button.defaultProps = {
  dataTestid: '',
  disabled: false,
  onClick: () => {},
  className: '',
};

export default Button;

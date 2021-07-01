import React from 'react';
import { string } from 'prop-types';
import { Link } from 'react-router-dom';

function LinkIcon({ href, imgPath, imgAlt, testIdLink, testIdImg }) {
  return (
    <Link to={ href } data-testid={ testIdLink }>
      <img src={ imgPath } alt={ imgAlt } data-testid={ testIdImg } />
    </Link>
  );
}

LinkIcon.defaultProps = {
  testIdLink: '',
  testIdImg: '',
};

LinkIcon.propTypes = {
  href: string.isRequired,
  imgAlt: string.isRequired,
  imgPath: string.isRequired,
  testIdLink: string,
  testIdImg: string,
};

export default LinkIcon;

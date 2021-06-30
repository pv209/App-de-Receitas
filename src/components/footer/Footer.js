import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer data-testid="footer">
      <Link to="/bebidas" />
      <Link to="/comidas" />
      <Link to="/explorar" />
    </footer>
  );
}

export default Footer;

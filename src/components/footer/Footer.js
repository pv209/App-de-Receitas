import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer data-testid="footer">
      <Link to="/bebidas" data-testid="drinks-bottom-btn" />
      <Link to="/comidas" data-testid="food-bottom-btn" />
      <Link to="/explorar" data-testid="explore-bottom-btn" />
    </footer>
  );
}

export default Footer;

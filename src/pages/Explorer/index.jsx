import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/footer';
import Header from '../../components/header';

function Explorer() {
  return (
    <>
      <Header pageTitle="Explorar" showButton={ false } />
      <button type="button" data-testid="explore-food">Explorar Comidas</button>
      <button type="button" data-testid="explore-drinks">Explorar Bebidas</button>
      <Link to="/explorar/comidas">
        <button type="button" data-testid="explore-food">Explorar Comidas</button>
      </Link>
      <Link to="/explorar/bebidas">
        <button type="button" data-testid="explore-drinks">Explorar Bebidas</button>
      </Link>
      <Footer />
    </>
  );
}

export default Explorer;

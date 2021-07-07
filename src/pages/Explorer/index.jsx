import React from 'react';
import Footer from '../../components/footer';
import Header from '../../components/header';

function Explorer() {
  return (
    <>
      <Header pageTitle="Explorar" showButton={ false } />
      <button type="button" data-testid="explore-food">Explorar Comidas</button>
      <button type="button" data-testid="explore-drinks">Explorar Bebidas</button>
      <Footer />
    </>
  );
}

export default Explorer;

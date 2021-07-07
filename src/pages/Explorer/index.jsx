import React from 'react';
import Footer from '../../components/footer';

function Explorer() {
  return (
    <>
      <button type="button" data-testid="explore-food">Explorar Comidas</button>
      <button type="button" data-testid="explore-drinks">Explorar Bebidas</button>
      <Footer />
    </>
  );
}

export default Explorer;

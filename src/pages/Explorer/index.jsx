import React from 'react';
import Footer from '../../components/footer';

function Explorer() {
  return (
    <>
      <button type="button" data-testid="explore-food">Comidas</button>
      <button type="button" data-testid="explore-drinks">Bedidas</button>
      <Footer />
    </>
  );
}

export default Explorer;

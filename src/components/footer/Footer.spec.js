import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import Footer from './index';

describe('footer', () => {
  render(
    <BrowserRouter>
      <Footer />
    </BrowserRouter>,
  );

  it('footer must exist', () => {
    const footer = screen.getByTestId('footer');
    expect(footer);
  });

  it('must contain 3 links', () => {
    const links = screen.getAllByRole('link');

    const linkFoods = links.find((link) => link.getAttribute('href') === '/comidas');
    const linkDrinks = links.find((link) => link.getAttribute('href') === '/bebidas');
    const linkExplorer = links.find((link) => link.getAttribute('href') === '/explorar');

    expect(linkFoods).toBeInTheDocument();
    expect(linkDrinks).toBeInTheDocument();
    expect(linkExplorer).toBeInTheDocument();
  });
});

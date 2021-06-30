import React from 'react';
import { render, screen } from '@testing-library/react';

describe('footer', () => {
  it('footer must exist', () => {
    render(<Footer />);

    const footer = screen.getByTestId('footer');
    expect(footer);
  });
});

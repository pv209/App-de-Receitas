import React from 'react';
import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import App from '../../App';

const LENGTH_INPUT_RADIO = 3;

const renderPath = (path) => {
  const history = createBrowserHistory();
  history.push(path);
  const { ...resources } = render(
    <Router history={ history }>
      <App />
    </Router>,
  );
  return { ...resources };
};

describe('Test para o Search Bar', () => {
  it('Testando se os campos aparecem na tela', () => {
    const { getByTestId, getAllByRole } = renderPath('/comidas');

    expect(getByTestId('search-input')).toBeInTheDocument();
    expect(getByTestId('exec-search-btn')).toBeInTheDocument();
    expect(getAllByRole('radio').length).toEqual(LENGTH_INPUT_RADIO);
  });
});

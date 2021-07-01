import renderPath from '../../test/functions';

describe('Test para o Header', () => {
  it('', () => {
    const { getByTestId } = renderPath('/comidas');

    expect(getByTestId('profile-top-btn')).toBeInTheDocument();
    expect(getByTestId('page-title')).toBeInTheDocument();
    expect(getByTestId('search-top-btn')).toBeInTheDocument();
  });
});

import renderPath from '../../test/functions';

const searchButton = 'search-top-btn';

describe('Test para o Header', () => {
  it('testa os botoes e redirecionamento para pagina de perfil', () => {
    const { getByTestId } = renderPath('/comidas');
    expect(getByTestId('profile-top-btn')).toBeInTheDocument();
    expect(getByTestId('page-title')).toBeInTheDocument();
    expect(getByTestId(searchButton)).toBeInTheDocument();
    const perfil = getByTestId('profile-icon"');
    userEvent.click(perfil);
    expect(getByTestId('perfil')).toBeInTheDocument();
  });

  it('testa os botoes e serch bar aparecendo ao clicar', () => {
    const { getByTestId } = renderPath('/comidas');

    expect(getByTestId('profile-top-btn')).toBeInTheDocument();
    expect(getByTestId('page-title')).toBeInTheDocument();
    expect(getByTestId(searchButton)).toBeInTheDocument();
    const searchBar = getByTestId(searchButton);
    userEvent.click(searchBar);
    expect(getByTestId('searchBar')).toBeInTheDocument();
  });
});

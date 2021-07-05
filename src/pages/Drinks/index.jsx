import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { shape } from 'prop-types';
import Header from '../../components/header/index';
import Footer from '../../components/footer';
import Button from '../../components/shared/button';
import DrinkProvider from '../../context/drinkContext/drinkProvider';

function Drinks() {
  const { fetchDrink, data, loading, fetchCategory, categorys,
    filterByCategory } = useContext(DrinkContext);

  useEffect(() => {
    fetchDrink();
    fetchCategory();
  }, []);

  return (
    <DrinkProvider>
    <div>
      <Header pageTitle="Bebidas" />
      <Button
        name="All"
        type="button"
        dataTestid="All-category-filter"
        onClick={ () => fetchDrink() }
      />
      {categorys.map((category, index) => (
        <Button
          type="button"
          onClick={ () => filterByCategory(category.strCategory) }
          name={ category.strCategory }
          key={ index }
          dataTestid={ `${category.strCategory}-category-filter` }
        />))}
      {loading ? <span>Carregando...</span> : data.map((drink, index) => (
        <Link to={ `/bebidas/${drink.idDrink}` } key={ drink.idDrink }>
          <ItemCard
            name={ drink.strDrink }
            image={ drink.strDrinkThumb }
            dataTestId={ index }
          />
        </Link>
      ))}
      <Footer />
      </div>
      </DrinkProvider>
  );
}

Drinks.propTypes = {
  location: shape({}).isRequired,
};

export default Drinks;

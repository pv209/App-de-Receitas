import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { shape } from 'prop-types';
import Header from '../../components/header/index';
import Footer from '../../components/footer';
import Button from '../../components/shared/button';

function Foods() {
  const {
    fetchFood,
    data,
    loading,
    fetchCategory,
    categorys,
    filterByCategory } = useContext(FoodContext);

  useEffect(() => {
    fetchFood();
    fetchCategory();
  }, []);
  return (
    <div>
      <Header pageTitle="Comidas" />
      <Button
        name="All"
        dataTestid="All-category-filter"
        type="button"
        onClick={ () => fetchFood() }
      />
      {categorys.map((category, index) => (
        <Button
          type="button"
          onClick={ () => filterByCategory(category.strCategory) }
          name={ category.strCategory }
          key={ index }
          dataTestid={ `${category.strCategory}-category-filter` }
        />))}
      { loading ? <span>carregando</span> : data.map((meal, index) => (
        <Link to={ `/comidas/${meal.idMeal}` } key={ meal.idMeal }>
          <Itemcard
            name={ meal.strMeal }
            image={ meal.strMealThumb }
            dataTestId={ index }
          />
        </Link>
      ))}
      <Footer />
    </RecipesProvider>
  );
}

Foods.propTypes = {
  location: shape({}).isRequired,
};

export default Foods;

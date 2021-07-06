import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { shape } from 'prop-types';
import Header from '../../components/header/index';
import Footer from '../../components/footer';
import Button from '../../components/shared/button';
import ItemCard from '../../components/itemCard';
import recipesContext from '../../context/recipesContext/recipesContext';

function Foods({ location }) {
  const {
    fetchRecipes,
    dataRecipes,
    loading,
    fetchCategoryRecipes,
    categorys,
    filterByCategory } = useContext(recipesContext);

  useEffect(() => {
    fetchRecipes(location.pathname);
    fetchCategoryRecipes(location.pathname);
  }, []);
  return (

    <div>
      <Header location={ location } pageTitle="Comidas" />
      <Button
        name="All"
        dataTestid="All-category-filter"
        type="button"
        onClick={ () => fetchRecipes(location.pathname) }
      />
      {categorys.map((category, index) => (
        <Button
          type="button"
          onClick={ () => filterByCategory(category.strCategory, location.pathname) }
          name={ category.strCategory }
          key={ index }
          dataTestid={ `${category.strCategory}-category-filter` }
        />))}
      { loading ? <span>carregando</span> : dataRecipes.map((meal, index) => (
        <Link to={ `/comidas/${meal.idMeal}` } key={ meal.idMeal }>
          <ItemCard
            name={ meal.strMeal }
            image={ meal.strMealThumb }
            dataTestId={ index }
          />
        </Link>
      ))}
      <Footer />
    </div>

  );
}

Foods.propTypes = {
  location: shape({}).isRequired,
};

export default Foods;

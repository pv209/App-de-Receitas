import React, { useContext, useEffect } from 'react';
import Header from '../../components/header/index';
import FoodContext from '../../context/foodContext/foodContext';
import Itemcard from '../../components/itemCard';

function Foods() {
  const { fetchFood, data, loading } = useContext(FoodContext);

  useEffect(() => {
    fetchFood();
    console.log(data.meal);
  }, []);
  return (
    <div>
      <Header pageTitle="Comidas" />
      { loading ? <span>carregando</span> : data.map((meal, index) => (
        <Itemcard
          name={ meal.strMeal }
          image={ meal.strMealThumb }
          key={ meal.idMeal }
          dataTestId={ index }
        />
      ))}
    </div>
  );
}

export default Foods;

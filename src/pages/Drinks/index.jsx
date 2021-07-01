import React, { useContext, useEffect } from 'react';
import Header from '../../components/header';
import DrinkContext from '../../context/drinkContext/drinkContext';
import ItemCard from '../../components/itemCard';

function Drinks() {
  const { fetchDrink, data, loading } = useContext(DrinkContext);

  useEffect(() => {
    fetchDrink();
  }, []);
  return (
    <div>
      <Header pageTitle="Bebidas" />
      {loading ? <span>Carregando...</span> : data.map((drink, index) => (
        <ItemCard
          key={ drink.idDrink }
          name={ drink.strDrink }
          image={ drink.strDrinkThumb }
          dataTestId={ index }
        />
      ))}
    </div>
  );
}

export default Drinks;

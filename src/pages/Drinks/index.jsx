import React, { useContext, useEffect } from 'react';
import Header from '../../components/header/index';
import DrinkContext from '../../context/drinkContext/drinkContext';
import ItemCard from '../../components/itemCard';
import Footer from '../../components/footer';

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
      <Footer />
    </div>
  );
}

export default Drinks;

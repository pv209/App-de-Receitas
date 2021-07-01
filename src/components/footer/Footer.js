import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as MealIcon } from '../../images/mealIcon.svg';
import { ReactComponent as DrinkIcon } from '../../images/drinkIcon.svg';
import { ReactComponent as ExploreIcon } from '../../images/exploreIcon.svg';

function Footer() {
  function getDrinksLink() {
    return (
      <Link
        to="/bebidas"
        src="../../images/drinkIcon.svg"
        data-testid="drinks-bottom-btn"
      >
        <DrinkIcon />
      </Link>
    );
  }

  function getExplorerLink() {
    return (
      <Link
        to="/explorar"
        src="../../images/exploreIcon.svg"
        data-testid="explore-bottom-btn"
      >
        <ExploreIcon />
      </Link>
    );
  }

  function getFoodsLink() {
    return (
      <Link
        to="/comidas"
        src="../../images/mealIcon.svg"
        data-testid="food-bottom-btn"
      >
        <MealIcon />
      </Link>
    );
  }
  return (
    <footer data-testid="footer">
      { getDrinksLink() }
      { getExplorerLink() }
      { getFoodsLink() }
    </footer>
  );
}

export default Footer;

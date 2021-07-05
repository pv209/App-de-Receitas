import React from 'react';
import { Switch, Route } from 'react-router-dom';

import NotFound from './pages/NotFound';
import Perfil from './pages/Perfil/index';
import Foods from './pages/Foods/index';
import Drinks from './pages/Drinks';
import FoodProvider from './context/foodContext/foodProvider';
import DrinkProvider from './context/drinkContext/drinkProvider';

import Login from './pages/Login';

import Explorer from './pages/Explorer';
import ExplorerFoods from './pages/ExplorerFoods';
import ExplorerDrinks from './pages/ExplorerDrinks';
import ExplorerFoodsIngredients from './pages/ExplorerFoodsIngredients';
import ExplorerDrinksIngredients from './pages/ExplorerDrinksIngredients';
import ExplorerFoodsLocal from './pages/ExplorerFoodsLocal';

import 'bootstrap/dist/css/bootstrap.min.css';

import './styles/global.css';

function App() {
  return (
    <DrinkProvider>
      <FoodProvider>
        <Switch>
          <Route exact path="/" component={ Login } />
          <Route path="/comidas/:id" component={ NotFound } />
          <Route path="/bebidas/:id" component={ NotFound } />
          <Route path="/comidas" component={ Foods } />
          <Route path="/bebidas" component={ Drinks } />
          <Route path="/comidas/:id/in-progress" component={ NotFound } />
          <Route path="/bebidas/:id/in-progress" component={ NotFound } />
          <Route path="/explorar" component={ Explorer } />
          <Route path="/explorar/comidas" component={ ExplorerFoods } />
          <Route path="/explorar/bebidas" component={ ExplorerDrinks } />
          <Route
            path="/explorar/comidas/ingredientes"
            component={ ExplorerFoodsIngredients }
          />
          <Route
            path="/explorar/bebidas/ingredientes"
            component={ ExplorerDrinksIngredients }
          />
          <Route path="/explorar/comidas/area" component={ ExplorerFoodsLocal } />
          <Route path="/perfil" component={ Perfil } />
          <Route path="/receitas-feitas" component={ NotFound } />
          <Route path="/receitas-favoritas" component={ NotFound } />
        </Switch>
      </FoodProvider>
    </DrinkProvider>

  );
}

export default App;

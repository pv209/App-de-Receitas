import React from 'react';
import { Switch, Route } from 'react-router-dom';

<<<<<<< HEAD
import Foods from './pages/Foods';
import Drinks from './pages/Drinks';
import Explorer from './pages/Explorer';
import ExplorerFoods from './pages/ExplorerFoods';
import ExplorerDrinks from './pages/ExplorerDrinks';
import ExplorerFoodsIngredients from './pages/ExplorerFoodsIngredients';
import ExplorerDrinksIngredients from './pages/ExplorerDrinksIngredients';
import ExplorerFoodsLocal from './pages/ExplorerFoodsLocal';
import Perfil from './pages/Perfil';
import NotFound from './pages/NotFound';
=======
import NotFound from './pages/NotFound';

// import Login from './pages/Login';
import Foods from './pages/Foods';
import Drinks from './pages/Drinks';
import Details from './pages/Details';
// import Perfil from './pages/Perfil';
// import Explore from './pages/Explore';
>>>>>>> 3dc2cc53f98aa1ba26d7a035c4fac81bd427a7d3

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/global.css';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ NotFound } />
<<<<<<< HEAD
      <Route path="/comidas" component={ Foods } />
      <Route path="/bebidas" component={ Drinks } />
      <Route path="/comidas/:id" component={ NotFound } />
      <Route path="/bebidas/:id" component={ NotFound } />
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
=======
      <Route path="/comidas/:id/in-progress" component={ NotFound } />
      <Route path="/comidas/:id" component={ Details } />
      <Route path="/comidas" component={ Foods } />
      <Route path="/bebidas/:id/in-progress" component={ NotFound } />
      <Route path="/bebidas/:id" component={ Details } />
      <Route path="/bebidas" component={ Drinks } />
      <Route path="/explorar" component={ NotFound } />
      <Route path="/explorar/comidas" component={ NotFound } />
      <Route path="/explorar/bebidas" component={ NotFound } />
      <Route path="/explorar/comidas/ingredientes" component={ NotFound } />
      <Route path="/explorar/bebidas/ingredientes" component={ NotFound } />
      <Route path="/explorar/comidas/area" component={ NotFound } />
      <Route path="/perfil" component={ NotFound } />
>>>>>>> 3dc2cc53f98aa1ba26d7a035c4fac81bd427a7d3
      <Route path="/receitas-feitas" component={ NotFound } />
      <Route path="/receitas-favoritas" component={ NotFound } />
    </Switch>
  );
}

export default App;

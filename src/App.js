import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Foods from './pages/Foods';
import NotFound from './pages/NotFound';

/*
import Login from './pages/Login';
import Foods from './pages/Foods';
import Drinks from './pages/Drinks';
import Perfil from './pages/Perfil';
import Explore from './pages/Explore';
 */

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ NotFound } />
      <Route path="/comidas" component={ Foods } />
      <Route path="/bebidas" component={ NotFound } />
      <Route path="/comidas/:id" component={ NotFound } />
      <Route path="/bebidas/:id" component={ NotFound } />
      <Route path="/comidas/:id/in-progress" component={ NotFound } />
      <Route path="/bebidas/:id/in-progress" component={ NotFound } />
      <Route path="/explorar" component={ NotFound } />
      <Route path="/explorar/comidas" component={ NotFound } />
      <Route path="/explorar/bebidas" component={ NotFound } />
      <Route path="/explorar/comidas/ingredientes" component={ NotFound } />
      <Route path="/explorar/bebidas/ingredientes" component={ NotFound } />
      <Route path="/explorar/comidas/area" component={ NotFound } />
      <Route path="/perfil" component={ NotFound } />
      <Route path="/receitas-feitas" component={ NotFound } />
      <Route path="/receitas-favoritas" component={ NotFound } />
    </Switch>
  );
}

export default App;

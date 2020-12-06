import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import LandingPage from './pages/landing/landing.js';
import CadastroPage from './pages/cadastro/cadastro.js';
import BooksFeed from './pages/booksFeed/booksfeed.js';
import EditBook from './pages/editBook/editbook.js';


function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/cadastro" component={CadastroPage} />
        <Route exact path="/books" component={BooksFeed} />
        <Route exact path="/books/:id" component={EditBook} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
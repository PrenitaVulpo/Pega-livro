import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import LandingPage from './pages/landing/landing.js';
import CadastroPage from './pages/cadastro/cadastro.js';
import BooksFeed from './pages/booksFeed/booksfeed.js';
import EditBook from './pages/editBook/editbook.js';
import UsersList from './pages/usersFeed/usersfeed.js';
import CreateBook from './pages/createBook/createbook';
import UserHome from './pages/userBookFeed/userbookfeed';
import Checkout from './pages/checkout/checkout';


function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/home" component={UserHome} />
        <Route exact path="/cadastro" component={CadastroPage} />
        <Route exact path="/books" component={BooksFeed} />
        <Route exact path="/books/:id" component={EditBook} />
        <Route exact path="/createBook" component={CreateBook} />
        <Route exact path="/users" component={UsersList} />
        <Route exact path="/checkout/:id" component={Checkout} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
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
import MyBooks from './pages/mybooks/myBooks';
import NormalRoute from './customRoutes/normalUser';
import AdmRoute from './customRoutes/adm';



function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/cadastro" component={CadastroPage} />
        <AdmRoute exact path="/books" component={BooksFeed} />
        <AdmRoute exact path="/books/:id" component={EditBook} />
        <AdmRoute exact path="/createBook" component={CreateBook} />
        <AdmRoute exact path="/users" component={UsersList} />
        <NormalRoute exact path="/home" component={UserHome} />
        <NormalRoute exact path="/myBooks" component={MyBooks} />
        <NormalRoute exact path="/checkout/:id" component={Checkout} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
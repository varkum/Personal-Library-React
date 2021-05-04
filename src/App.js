import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import config from "./config";

import './App.css';
import BookList from "./components/book-list.component";
import Navbar from './components/navbar.component';
import TopBooks from './components/top-rated.component';
import HomePage from './components/home-page.component';

export default class App extends React.Component {
  render() {
    let loggedIn = localStorage.getItem('loggedIn');
    return (
      <Router>
        <div className="container-fluid">
        <Navbar config={config} />
        <Switch>
         <Route exact path="/">
          {loggedIn ? <Redirect to='/books' /> : <HomePage config={config} />}
         </Route>
         <Route exact path="/books">
          {loggedIn ? <BookList config={config} /> : <Redirect to='/' />}
         </Route>
         <Route path="/books/top">
          {loggedIn ? <TopBooks config={config} /> : <Redirect to='/' />}
         </Route>
         </Switch>
        </div>
      </Router>
  
    )
  }
}



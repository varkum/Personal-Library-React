import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends React.Component{
  constructor(props) {
    super(props);

    this.handleLogout = this.handleLogout.bind(this);
  }
  
  handleLogout() {
    localStorage.removeItem("jwt");
    localStorage.removeItem('loggedIn');
    window.location = '/';
  }
  render() {
  let logoutButton = "";
      if (localStorage.getItem("loggedIn")) {
        logoutButton = <button className="btn btn-secondary" onClick={this.handleLogout}>Log out</button>
      }
  return (
      
      <nav className="navbar navbar-expand-md fixed-top navbar-dark bg-primary p-3">
        <Link to="/books" className="navbar-brand h1">Personal Library</Link>
        <div className="container-fluid">
          <ul className="nav navbar-nav">
            <li className="nav-item">
              <Link to="/books" className="nav-link">All Books</Link>
            </li>
            <li className="nav-item">
              <Link to="/books/top" className="nav-link">Top Rated</Link>
            </li>
            </ul>
            <div>
              {logoutButton}
            </div>
        </div>
      </nav>
  )
  }
}




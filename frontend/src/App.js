import React, { Component } from 'react';
import Home from './components/Home';
import LoginForm from './components/Login/LoginForm';
import Navbar from 'react-bootstrap/Navbar'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar bg="dark">
          <Navbar.Brand>
            <Link to="/" className="text-white">Banger Music</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Link to="/login/" className="text-white">Login</Link>
          </Navbar.Collapse>
        </Navbar>

        <Route path="/" exact component={Home} />
        <Route path="/login/" component={LoginForm} />
      </BrowserRouter>
    );
  }
}

export default App;

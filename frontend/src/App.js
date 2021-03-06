import React, { Component } from 'react';
import Home from './components/Home';
import LoginForm from './components/Login/LoginForm';
import UserDetail from './components/User/UserDetail';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter, Route, Link } from 'react-router-dom';


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
        <Route path="/account/" component={UserDetail} />
      </BrowserRouter>
    );
  }
}

export default App;

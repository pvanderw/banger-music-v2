import React, { Component } from 'react';
import Home from './components/Home';
import { LoginForm } from './components/Login/LoginForm';
import SignupForm from './components/Signup/SignupForm';
import UserDetail from './components/User/UserDetail';
import CustomNav from './components/Navbar/CustomNav';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './redux/actions/auth';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/utils.css';

axios.defaults.baseURL = 'http://localhost:8000/';

class App extends Component {

  componentDidMount() {
    this.props.onTryAutoSignup();
  }

  render() {
    return (
      <BrowserRouter>
        <CustomNav isAuthenticated={this.props.isAuthenticated} />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login/" component={LoginForm} />
          <Route path="/signup/" component={SignupForm} />
          <Route path="/account/" component={UserDetail} />
        </Switch>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.token !== undefined
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
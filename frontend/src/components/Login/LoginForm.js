import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import * as actions from '../../redux/actions/auth';
import { connect } from 'react-redux';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      errors: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  }


  handleSubmit(event) {
    event.preventDefault();
    this.props.onAuth(this.state.username, this.state.password);
    this.props.history.push('/');

    // let headers = {'Content-Type': 'application/json'};
    // let body = JSON.stringify({
    //   'username': this.state.email,
    //   'password': this.state.password,
    // });
    // return axios({
    //   method: 'post',
    //   headers: headers,
    //   data: body,
    //   withCredentials: true,
    //   url: 'api/auth/login/',
    // })
    //   .then(response => {
    //     return response.json();
    //   })
    //   .then(jsonResponse => {
    //     console.log(jsonResponse);
    //     const error = jsonResponse.detail;
    //     if (error !== undefined) {
    //       this.setState({"errors": error});
    //     }
    //     else {
    //       this.props.history.push('/account/');
    //     }
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   })
  }
  
  render() {
    return (
      <div className="container w-50 mt-5 shadow p-3 mb-5 bg-white rounded">
        <h3 className="mb-3">Login</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="username">
            <Form.Label>Username:</Form.Label>
            <Form.Control type="username" name="username" value={this.state.username} onChange={this.handleChange} required />
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Label>Password:</Form.Label>
            <Form.Control type="password" name="password" value={this.state.password} onChange={this.handleChange} required />
          </Form.Group>
          <Button variant="primary" type="submit">Login</Button>
          {this.state.error.length > 0 && (
            <p className="text-danger mt-3 mx-auto">{this.state.error}</p>
          )}
        </Form>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    username: state.username,
    password: state.password,
    error: state.error
  }
}


const mapDispatchToProps = dispatch => {
  return {
    onAuth: (username, password) => dispatch(actions.authLogin(username, password)) 
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);

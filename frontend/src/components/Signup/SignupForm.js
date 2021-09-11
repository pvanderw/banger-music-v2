import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions/auth';


class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password1: '',
      password2: '',
      error: [],
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
    this.props.register(this.state.username, this.state.email, this.state.password2);
    this.props.history.push('/login');




    // let headers = {'Content-Type': 'application/json'};
    // let body = JSON.stringify({
    //   'email': this.state.email,
    //   'username': this.state.email,
    //   'password': this.state.password,
    //   're_password': this.state.re_password,
    // });
    // return fetch('http://localhost:8000/api/auth/jwt/create/', {
    //     method: 'POST',
    //     headers: headers,
    //     body: body,
    //     credentials: 'include',
    //   })
    //   .then(response => {
    //     return response.json();
    //   })
    //   .then(jsonResponse => {
    //     console.log(jsonResponse);
    //     const non_field_errors = jsonResponse.non_field_errors;
    //     const password_errors = jsonResponse.password;
    //     if (non_field_errors !== undefined  || password_errors !== undefined) {
    //       this.setState({"errors": [non_field_errors, password_errors]});
    //     }
    //     else {
    //       this.props.history.push('/login/');
    //     }
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   })
  }
  
  render() {
    return (
      <div className="container mt-5 shadow p-3 mb-5 bg-white rounded is-max-width-600">
        <h3 className="mb-3">Signup</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="username">
            <Form.Label>Username:</Form.Label>
            <Form.Control type="username" name="username" value={this.state.username} onChange={this.handleChange} required />
          </Form.Group>
          <Form.Group controlId="email">
            <Form.Label>Email:</Form.Label>
            <Form.Control type="email" name="email" value={this.state.email} onChange={this.handleChange} required />
          </Form.Group>
          <Form.Group controlId="password1">
            <Form.Label>Password:</Form.Label>
            <Form.Control type="password" name="password1" value={this.state.password1} onChange={this.handleChange} required />
          </Form.Group>
          <Form.Group controlId="password2">
            <Form.Label>Re-type Password:</Form.Label>
            <Form.Control type="password" name="password2" value={this.state.password2} onChange={this.handleChange} required />
          </Form.Group>
          <Button variant="primary" type="submit" className="mt-3">Register</Button>
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
    error: state.error
  }
}


const mapDispatchToProps = dispatch => {
  return {
    register: (username, email, password) => dispatch(actions.authSignup(username, email, password)) 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);

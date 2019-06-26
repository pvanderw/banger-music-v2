import React, { Component } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
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
    let headers = {'Content-Type': 'application/json'};
    let body = JSON.stringify({
      'username': this.state.email,
      'password': this.state.password,
    });
    return fetch('http://localhost:8000/api/auth/jwt/create/', {
        method: 'POST',
        headers: headers,
        body: body
      })
      .then(response => {
        return response.json();
      })
      .then(jsonResponse => {
        const error = jsonResponse.detail;
        if (error !== undefined) {
          this.setState({"errors": error});
        }
        else {
          const accessToken = jsonResponse.access;
          window.localStorage.setItem('JWT', accessToken);
          headers = {
            'Content-Type': 'application/json',
            'Authentication': `JWT ${accessToken}`,
            'credentials': 'include',
          };
          this.props.history.push('/users/me/');
        }
      })
      .catch(error => {
        console.log(error);
      })
  }
  
  render() {
    return (
      <div className="container w-50 mt-5 shadow p-3 mb-5 bg-white rounded">
        <h3 className="mb-3">Login</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="email">
            <Form.Label>Email:</Form.Label>
            <Form.Control type="email" name="email" value={this.state.email} onChange={this.handleChange} required />
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Label>Password:</Form.Label>
            <Form.Control type="password" name="password" value={this.state.password} onChange={this.handleChange} required />
          </Form.Group>
          <Button variant="primary" type="submit">Login</Button>
          {this.state.errors.length > 0 && (
            <p className="text-danger mt-3 mx-auto">{this.state.errors}</p>
          )}
        </Form>
      </div>
    );
  }
}

export default LoginForm;

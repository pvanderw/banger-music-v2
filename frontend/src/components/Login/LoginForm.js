import React, { Component } from 'react';


class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {

  }
  
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label for="email">Email:</label>
        <input type="email" name="email" value={this.state.email} required />
        <label for="password">Password:</label>
        <input type="password" name="password" value={this.state.password} required />
        <input type="submit" value="Login" />
      </form>
    );
  }
}

export default LoginForm;

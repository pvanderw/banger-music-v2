import React, { Component } from 'react';

class UserDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: '',
      errors: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:8000/api/auth/users/me/', { 
      method: 'get', 
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      credentials: 'include',
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState({users: data});
      });
  }

  render() {
    console.log(this.state);
    return (
      <div className="container w-50 mt-5 shadow p-3 mb-5 bg-white rounded">
        <h3 className="mb-3">Account Info</h3>
        <p>Email: {this.state.users.email}</p>
      </div>
    );
  }
}

export default UserDetail;

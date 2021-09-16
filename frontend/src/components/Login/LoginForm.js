import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import * as actions from '../../redux/actions/auth';
import { useSelector, useDispatch } from 'react-redux';
import { authLogin } from '../../features/auth/authSlice';
import { useHistory, Link } from "react-router-dom";


export function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const error = useSelector((state) => state.auth.error);
  const status = useSelector((state) => state.auth.status);

  const dispatch = useDispatch();
  const history = useHistory();

  const onUsernameChanged = (e) => setUsername(e.target.value);
  const onPasswordChanged = (e) => setPassword(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(authLogin({username, password}));
  };
  
  let errorMessage = null;
  if (error) {
      errorMessage = (
          <p className="text-danger mt-3 mx-auto">{error}</p>
      );
  }

  if (status === 'succeeded') {
    history.push('/');
  }

  return (
    <div className="container w-50 mt-5 shadow p-3 mb-5 bg-white rounded">
      <h3 className="mb-3">Login</h3>
      <Form onSubmit={onSubmit}>
        <Form.Group controlId="username">
          <Form.Label>Username:</Form.Label>
          <Form.Control type="username" name="username" value={username} onChange={onUsernameChanged} required />
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label>Password:</Form.Label>
          <Form.Control type="password" name="password" value={password} onChange={onPasswordChanged} required />
        </Form.Group>
        <Button variant="primary" type="submit" className="mt-3">Login</Button><Link to="/signup/" className="p-4">or Signup here</Link>
        {errorMessage}
      </Form>
    </div>
  );
}
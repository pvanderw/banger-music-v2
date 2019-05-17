import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import LoginForm from './components/Login/LoginForm';

ReactDOM.render(<LoginForm />, document.getElementById('root'));
registerServiceWorker();

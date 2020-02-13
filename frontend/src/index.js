import React from 'react';
import ReactDOM from 'react-dom';

// import { Provider } from 'react-redux'
// import store from './redux/store'

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<App />,
	document.getElementById('root')
);
registerServiceWorker();

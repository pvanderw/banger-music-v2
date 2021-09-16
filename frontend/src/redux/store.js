// import { createBrowserHistory } from 'history';
// import { routerMiddleware } from 'connected-react-router';
// import { createStore, compose, applyMiddleware } from 'redux';
// import createRootReducer from './reducers/rootReducer';
// import thunk from 'redux-thunk';


import { configureStore } from '@reduxjs/toolkit'

import authReducer from '../features/auth/authSlice';

const store = configureStore({
    reducer: {
        auth: authReducer,
    },
});

export default store;

// export const history = createBrowserHistory();

// const composeEnhances = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


// export default function configureStore(preloadedState) {
//   const store = createStore(
//     createRootReducer(history), // root reducer with router state
//     preloadedState,
//     composeEnhances(
//       applyMiddleware(
//         routerMiddleware(history), // for dispatching history actions
//         thunk,
//       ),
//     ),
//   );

//   return store
// }

// const store = createStore(reducer, composeEnhances(
//     applyMiddleware(thunk)
// ));



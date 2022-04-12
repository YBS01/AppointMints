import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'
import reducers from './reducers'
import './index.css'

import { useEffect } from 'react';

import App from './App'

const store = createStore(reducers, compose(applyMiddleware(thunk)))

//ReactDOM.render(<App />, document.getElementById('root'));

function AppWithCallbackAfterRender() {
    useEffect(() => {
      console.log('rendered');
    });
  
    return <Provider store={store}>
              <App />
          </Provider>
  }
  
  const container = document.getElementById('root');
  const root = ReactDOM.createRoot(container);
  root.render(<AppWithCallbackAfterRender />);
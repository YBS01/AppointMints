import React from 'react'
//import ReactDOMClient from 'react-dom/client'
import ReactDOM from 'react-dom/client'
import { createRoot } from 'react-dom/client'
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import reducers from './reducers'

import App from './App'

const store = createStore(reducers, compose(applyMiddleware(thunk)))

/*ReactDOMClient.createRoot(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
)*/

/*ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
)*/



/*const root = ReactDOM.createRoot(
    document.getElementById('root')
  );
  
  function tick() {
    const element = (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
      </div>
    );
    root.render(element);}
  
  setInterval(tick, 1000);*/
  
  

const element = <Provider store={store}>
                    <App />
                </Provider>;
const root = ReactDOM.createRoot(
  document.getElementById('root')
);
root.render(element);
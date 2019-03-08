import React, { Component } from 'react';
import Counter from './Counter';
import counterReducer from './reducer';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import DisplayCounter from './DisplayCounter';
import logger from 'redux-logger';

let store = createStore(counterReducer,
  applyMiddleware(logger)
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Counter />
          <DisplayCounter />
        </div>
      </Provider>
    );
  }
}

export default App;

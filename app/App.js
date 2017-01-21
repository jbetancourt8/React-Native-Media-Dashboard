import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducer';
import Router from './Router';

class App extends Component {
  render() {
    const store = createStore(reducers);

    return (
      <Provider store={ store }>
        <Router />
      </Provider>
    );
  }
}

export default App;

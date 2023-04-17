// App.js
import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import ParentComponent from './ParentComponent';
import ChildComponent from './ChildComponent';
import parentReducer from './parentReducer'; // assuming the parentReducer file is in the same directory

const store = createStore(parentReducer); // create Redux store with the parentReducer

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Redux Parent-Child Example</h1>
        <ParentComponent />
        <ChildComponent />
      </div>
    </Provider>
  );
};

export default App;

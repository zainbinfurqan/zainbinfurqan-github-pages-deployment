import React from 'react';
import './App.css';
import { Provider } from 'react-redux'
import store from './redux'
import ToDoApp from './ToDoApp'
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <p>Hellow all github actions</p>
        {/* <ToDoApp /> */}
      </div>
    </Provider>
  );
}

export default App;

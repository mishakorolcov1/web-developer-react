import React from 'react';
import logo from './logo.svg';
import './App.css';
import Fcomponent from './Fcomponent';
import Ccomponent from './Ccomponent';
import Statecomponent from './Statecomponent';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Statecomponent />
      <Fcomponent name="Alex" />
      <Ccomponent  numbers={[1,2,3,4]} />
      
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

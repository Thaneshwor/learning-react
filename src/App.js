import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/day1/Greet';
import Welcome from './components/day1/Welcome';
import Hello from './components/day1/Hello';
import JSXtest from './components/day1/JSXtest';
import Person from './components/day1/Person';
import Message from './components/day1/Message';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Message name="Diana" heroName='Wonder Woman' />
      </div>
    )
  }
}
export default App;

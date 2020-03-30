import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/day1/Greet';
import Welcome from './components/day1/Welcome';
import Hello from './components/day1/Hello';
import JSXtest from './components/day1/JSXtest'


class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Greet /> */}
        {/* <Welcome /> */}
        {/* <Hello /> */}
        <JSXtest />
      </div>
    )
  }
}
export default App;

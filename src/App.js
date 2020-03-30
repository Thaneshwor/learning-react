import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/day1/Greet';
import Welcome from './components/day1/Welcome';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Greet />
        <Welcome />
      </div>
    )
  }
}
export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/day1/Greet';
import Welcome from './components/day1/Welcome';
import Hello from './components/day1/Hello';
import JSXtest from './components/day1/JSXtest';
import Person from './components/day1/Person';


class App extends Component {
  render() {
    return (
      <div className="App">
        {/* function components */}
        <Person name="Burce" heroName='Batman' ><button>Click me</button></Person>
        <Person name="Clark" heroName='Superman' />
        <Person name="Diana" heroName='Wonder Woman' />

        {/* class components */}
        <Welcome name="Burce" heroName='Batman' />
        <Welcome name="Clark" heroName='Superman' />
        <Welcome name="Diana" heroName='Wonder Woman' />
        {/* <Hello /> */}
        <JSXtest />
      </div>
    )
  }
}
export default App;

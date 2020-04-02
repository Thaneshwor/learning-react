import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import PortalDemo from './components/day3/portals/PortalDemo';
// import Hello from './components/day1/Hello';
// import JSXtest from './components/day1/JSXtest';
// import Person from './components/day1/Person';
// import Message from './components/day1/Message';
// import Counter from './components/day2/Counter';
// import Greet from './components/day2/Greet';
// import Welcome from './components/day2/Welcome';
// import FunctionClick from './components/day2/eventHandling/FunctionClick';
// import UserList from './components/day2/eventHandling/UserList';
// import ClassClick from './components/day2/eventHandling/ClassClick';
// import Toggle from './components/day2/eventHandling/Toggle';
// import EventBind from './components/day2/eventBinding/EventBind';
// import ParentComponent from './components/day2/ParentComponent';
// import Car from './components/day2/Car';
// import MouseTracker from './components/day2/renderProps/MouseTracker'
// import UserGreeting from './components/day2/conditionalRendering/UserGreeting';
// import LoginController from './components/day2/conditionalRendering/LoginController';
// import NameList from './components/day2/listRendering/NameList';
// import StyleSheet from './components/day3/StyleSheet';
// import Inline from './components/day3/Inline';
// import styles from './components/day3/css/myStyle.module.css';
// import Form from './components/day3/formHandling/Form';
// import Reservation from './components/day3/formHandling/Reservation';
// import LifecycleA from './components/day3/componentlifeCycle/LifecycleA';
// import FragmentDemo from './components/day3/fragments/FragmentDemo';
// import Table from './components/day3/fragments/Table';
// import PureComp from './components/day3/pureComponents/PureComp';
// import ParentComp from './components/day3/pureComponents/ParentComp';
import Hero from './components/day3/errorBoundaries/Hero';
import ErrorBoundary from './components/day3/errorBoundaries/ErrorBoundary';
import ClickCounter from './components/day3/hoc/ClickCounter';
import HoverCounter from './components/day3/hoc/HoverCounter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ClickCounter name='Thanos' />
        <HoverCounter />
      </div >
    )
  }
}
export default App;

import React from "react";
// import logo from "./logo.svg";
import "../../App.css";

function Person(props) {
  return (
    <div className='person'>
      <h1>{props.name}</h1>
      <p>{props.heroName}</p>
      {props.children}
    </div>
  );
}

export default Person;

// Build a simple counter app
// Psudocode the solution
// import all necessary dependencies - modules and functions
// Define your functional component (in this case CounterApp)
// Create a state variable count to store the initial count value
// Define a function increaseCount to increase our count value
// Render the count value to the UI
// export the countApp as a default export

import React from "react";
import { useState } from "react";
import './App.css'

const CounterApp = () => {
  const [count, setCount] = useState(0);

  const increaseCount = () =>{
    setCount(count + 1)
  };

  const decreaseCount = () => {
    setCount(count - 1)
  }

  return (
    <div className="counter-container">
      <h1>Counter</h1>
      <div className="counter-display">{count}</div>
      <div className="button-container">
      <button className="increment-button" onClick={increaseCount}>increment</button>
      <button className="increment-button" onClick={decreaseCount}>decrement</button>
      </div>
    </div>
  )

}

export default CounterApp;
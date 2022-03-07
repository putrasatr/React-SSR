import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, countSet] = useState(1);
  const increment = () => {
    countSet((c) => c + 1);
  };
  const decrement = () => {
    countSet((c) => c - 1);
  };
  return (
    <>
      <p>{count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </>
  );
}

export default App;

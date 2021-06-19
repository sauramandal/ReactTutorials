import React, { useState } from "react";

const Counter = ({ render }) => {
  const [counter, setCounter] = useState(0);
  const incrementCounter = () => {
    setCounter(counter + 1);
  };
  return <div>{render(counter, incrementCounter)}</div>;
};

export default Counter;

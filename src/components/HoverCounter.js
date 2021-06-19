import React from "react";
import withCounter from "./withCounter";

const HoverCounter = ({ count, incrementCount }) => {
  return <h2 onMouseOver={incrementCount}>Hovered {count} times</h2>;
};

export default withCounter(HoverCounter);

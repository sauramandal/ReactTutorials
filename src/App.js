import ClickCounter from "./components/ClickCounter";
import Counter from "./components/ClickCounterRenderProps";
import HoverCounter from "./components/HoverCounter";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <ClickCounter />
      <HoverCounter />
      <Counter
        render={(counter, incrementCounter) => (
          <ClickCounter count={counter} incrementCount={incrementCounter} />
        )}
      />
      <Counter
        render={(counter, incrementCounter) => (
          <HoverCounter count={counter} incrementCount={incrementCounter} />
        )}
      />
    </div>
  );
}

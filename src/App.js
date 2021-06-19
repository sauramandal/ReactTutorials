import ClickCounter from "./components/ClickCounter";
import HoverCounter from "./components/HoverCounter";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <ClickCounter />
      <HoverCounter />
    </div>
  );
}

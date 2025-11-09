import "./App.css";
import { useCountStore } from "./store/countStore";

function App() {
  const count = useCountStore((state) => state.count);
  const increment = useCountStore((state) => state.increment);
  const decrement = useCountStore((state) => state.decrement);

  return (
    <>
      <h1>ZUSTAND</h1>
      <div className="card">
        <p>Count : {count}</p>
      </div>

      <div>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>decrement</button>
      </div>
    </>
  );
}

export default App;


import { useState } from "react";

function CounterTwo() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prevCount) => prevCount + 3);
  };

  const decrement = () => {
    setCount((prevCount) => prevCount - 3);
  };

  return (
    <div>
      <h2>Counter App Two</h2>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default CounterTwo;
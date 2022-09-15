// 1. Importing useState
import React, { useState } from "react";

function UseState() {
  // 2. Destructuring useState
  // naming our: state variable 'count' & update function 'setCount'
  let [count, setCount] = useState(0);
  // 3. useState allows us to pass in the starting value, here it is 0

  // below we are:
  // - displaying count with {count}
  // - updating count with setCount when the button is clicked (more info below code)
  return (
    <div className="App">
      <p>You clicked {count} times</p>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Click Me
      </button>
    </div>
  );
}

export default UseState;

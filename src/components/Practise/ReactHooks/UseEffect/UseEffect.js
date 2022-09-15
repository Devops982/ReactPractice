import React, { useState, useEffect } from "react";

// useEffect after render example

const UseEffect = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `you clicked Counter ${count} times`;
  });

  return (
    <>
      <h1>
        <div>UseEffect</div>
        <button onClick={() => setCount((prevCount) => prevCount + 1)}>
          Clicked {count} Times
        </button>
      </h1>
    </>
  );
};

export default UseEffect;

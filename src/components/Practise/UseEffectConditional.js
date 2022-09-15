import React, { useState, useEffect } from "react";

const UseEffectConditional = () => {
  const [count, setcount] = useState(0);
  const [name, setname] = useState("");
  useEffect(() => {
    document.title = `you clicked ${count} times`;
  }, [count]);

  return (
    <>
      <h1>
        <div>UseEffectConditional</div>
        <input
          type="text"
          value={name}
          onChange={(e) => setname(e.target.value)}
        />
        <button onClick={() => setcount((prevCount) => prevCount + 1)}>
          Clicked {count}
        </button>
        <input type="Text" value={name} />
      </h1>
    </>
  );
};

export default UseEffectConditional;

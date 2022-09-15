import React, { useEffect, useState } from "react";

const MouseCoordinates = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const LogMousePosition = (e) => {
    setX(e.clientX);
    setY(e.clientY);
  };
  useEffect(() => {
    window.addEventListener("mousemove", LogMousePosition);
  }, []);

  return (
    <h1>
      <div>MouseCoordinates</div>
      <h1>
        Mouse Coordinate-x- {x}, y- {y}
      </h1>
    </h1>
  );
};

export default MouseCoordinates;

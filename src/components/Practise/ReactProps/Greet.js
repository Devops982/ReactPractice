import React from "react";

const Greet = (props) => {
  return (
    <div>
      <h1>
        {props.name} - Designation:{props.designation}
      </h1>
      {props.children}
    </div>
  );
};

export default Greet;

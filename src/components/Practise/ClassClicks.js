import React, { Component } from "react";

class ClassClicks extends Component {
  ClickHandler() {
    console.log("Clicked the Button");
  }
  render() {
    return (
      <div>
        <button onClick={this.ClickHandler()}>Click Me</button>ClassClicks
      </div>
    );
  }
}

export default ClassClicks;

import React from "react";
import axios from "axios";

class apiCall extends React.Component {
  state = {
    title: "API Not working",
  };
  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => {
        this.setState({
          title: response.data.title,
          userId: response.data.userId,
          id: response.data.id,
        });
      });
  }
  render() {
    return (
      <>
        <div>{this.state.title}</div>;<div>{this.state.id}</div>;
        <div>{this.state.userId}</div>;
      </>
    );
  }
}

export default apiCall;

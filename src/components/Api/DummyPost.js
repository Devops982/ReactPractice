import axios from "axios";
import React, { Component } from "react";

class ExchangeRate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        console.log(response);
        this.setState({ posts: response.data });
      })
      .catch((Error) => {
        console.log(Error);
      });
  }

  render() {
    const { posts } = this.state;
    return (
      <div>
        <h1>ExchangeRate</h1>
        {posts.length
          ? posts.map((posts) => (
              <h1>
                <div key={posts.id}>{posts.title} </div>
              </h1>
            ))
          : null}
      </div>
    );
  }
}

export default ExchangeRate;

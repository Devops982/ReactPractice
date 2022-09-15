import React, { useEffect, useState } from "react";
import axios from "axios";

const DataFetching = () => {
  const [posts, setposts] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        console.log(res);
        setposts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    // return () => {
    //   second;
    // };
  }, []);

  return (
    <h1>
      <div> DataFetching</div>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </h1>
  );
};

export default DataFetching;

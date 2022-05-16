import axios from "axios";
import React, { Component } from "react";

class Posts extends Component {
  componentDidMount() {
    axios.get("https://localhost:5000/posts").then((response) => {
      console.log(response);
    });
  }

  render() {
    return "no posts";
  }
}

export default Posts;

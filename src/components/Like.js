import React, { Component } from "react";

class Like extends Component {
  constructor() {
    super();
    this.state = {
      like: 0
    };
  }

  handleLike = e => {
    e.preventDefault();
    console.log("a");
    fetch("http://localhost:3001/moviesdfasfdsf")
      .then(response => {
        if (response.status !== 200) {
          throw new Error(response.statusText);
        } else {
          console.log("b");
          return response.json();
        }
      })
      .then(movies => {
        console.log("c", movies);
      })
      .catch(err => {
        console.log("d", err);
      });
    console.log("e");
    // a e d
  };
  render() {
    return (
      <div>
        <button onClick={this.handleLike}>Like</button>
        {this.state.like}
      </div>
    );
  }
}

export default Like;

import React, { Component } from "react";

  let style = {
    fontSize: "79px",
    marginTop: "0.5rem",
    marginLeft: "32rem",
    fontFamily: 'Lato',
    color: "#F7F5E1",
    border: "black",
    textShadow: "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black"
  }

class Title extends Component {

  render() {

    return (
      <h1 style={style}> Rhythm Composer </h1>
    );

  }
}

export default Title

// Code Keypad Component Here
import React, { Component } from "react";

class KeyPad extends Component {
  state = {};

  handleKeyUp(e) {
    console.log("Entering password...");
  }

  render() {
    return <input onKeyUp={this.handleKeyUp} type="password"></input>;
  }
}

export default KeyPad;

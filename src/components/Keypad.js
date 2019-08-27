// Code Keypad Component Here
import React, { PureComponent } from "react"

export default class Keypad extends PureComponent {
  handleKeyUp = () => {
    console.log("Entering password...")
  }

  render() {
    return <input type="password" onKeyUp={this.handleKeyUp} />
  }
}

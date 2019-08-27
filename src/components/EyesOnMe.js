// Code EyesOnMe Component Here
import React, { PureComponent } from "react"

export default class EyesOnMe extends PureComponent {
  constructor() {
    super()
  }

  handleFocus = () => {
    console.log("Good!")
  }

  handleBlur = () => {
    console.log("Hey! Eyes on me!")
  }

  render() {
    return <button onFocus={this.handleFocus} onBlur={this.handleBlur}></button>
  }
}

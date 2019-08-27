// Code EyesOnMe Component Here

import React from 'react'

export default class EyesOnMe extends React.Component {


    blurHandler = (event) => console.log('Hey! Eyes on me!')

    focusHandler = (event) => console.log('Good!')


    render () {
        return <button onFocus={this.focusHandler} onBlur={this.blurHandler}></button>
    }
}

import React, { Component } from 'react'
import { Link } from "react-router-dom";
export class Counter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            number: 0
        }
    }
    handleOnDecrement = () => {
        let dec = this.state.number
        this.setState({ number: dec > 0 ? dec - 1 : dec })
    }
    handleOnIncrement = () => {
        this.setState({ number: this.state.number + 1 })
    }
    render() {

        return (
            <>
                <Link to={'form'}>Form</Link>
                <p>{this.state.number}</p>
                <button onClick={this.handleOnDecrement}>-</button>
                <button onClick={this.handleOnIncrement}>+</button>
            </>
        )
    }
}

export default Counter
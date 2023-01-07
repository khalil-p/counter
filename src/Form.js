import React, { Component } from 'react'
import { Link } from "react-router-dom";
export class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            email: "",
            number: "",
            city: "",
        }
        this.array = {
            arr: []
        }
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
    }

    onSubmitHandler = (e) => {
        e.preventDefault()
        console.log("This is state::", this.state)
        this.array.arr.push(this.state);
        console.log("This is arr", this.array.arr);
        this.setState({
            name: "",
            email: "",
            number: "",
            city: "",
        })
    }

    onChangeHandler = (event) => {
        const target = event.target;
        const name = event.target.name
        const value = target.value === "" ? alert("Enter Valid Input") : target.value;
        this.setState({
            [name]: value
        });
    }

    render() {
        const displayList = this.array.arr.map((item, index) => {
            console.log("This is item in Map", item)
            return (
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'left' }}>
                    <li>Name: {item.name}</li>
                    <li>Email-Id: {item.email}</li>
                    <li>Phone Number: {item.number}</li>
                    <li>City Name: {item.city}</li>
                </ul>
            )
        })



        return (
            <>
                <Link to={'/'}>Counter</Link>
                <div style={{ display: 'flex', alignItems: "center", flexDirection: 'column' }}>
                    <h1><b>FORM</b></h1>
                    <form onSubmit={this.onSubmitHandler} >
                        <input type={'text'} placeholder={'Enter Name'} name="name" value={this.state.name} onChange={this.onChangeHandler} /> <br />
                        <input type={'email'} placeholder={'Enter EmailId'} name="email" value={this.state.email} onChange={this.onChangeHandler} /><br />
                        <input type={'number'} placeholder={'Enter Number'} name="number" value={this.state.number} onChange={this.onChangeHandler} /><br />
                        <input type={'text'} placeholder={'Enter City'} name="city" value={this.state.city} onChange={this.onChangeHandler} /><br />
                        <button type='submit'  >Submit</button>
                    </form>
                    {displayList}
                </div>
            </>
        )
    }
}

export default Form
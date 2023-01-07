import React, { Component } from 'react'

export class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            email: "",
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
    }


    onChangeHandler = (event) => {

        const target = event.target;
        const name = event.target.name
        const value = target.value === "" ? alert("Enter Valid Input") : target.value;
        // const value = target.value
        this.setState({

            [name]: value

        });



        // this.setState({ ...this.state })

    }

    // onChangeHandlerEmail = (event) => {
    //     const value = event.target.value;
    //     this.setState({ info: { [email]: value } });
    // }
    // onChangeHandlerNumber = (e) => {
    //     e.preventDefault()

    //     this.setState({
    //         formData: {
    //             number: Number(e.target.value)
    //         }
    //     })
    // }
    // onChangeHandlerCity = (e) => {
    //     e.preventDefault()

    //     this.setState({
    //         formData: {
    //             city: e.target.value
    //         }
    //     })
    // }
    render() {

        // console.log("This is array in display list",this.array.arr)
        const displayList = this.array.arr.map((item, index) => {
            console.log("This is item in Map", item)
            return (
                <ul style={{ listStyle: 'none', }}>
                    <li>Name: {item.name}</li>
                    <li>Email-Id: {item.email}</li>
                </ul>
            )
        })



        return (
            <>
                <div style={{ display: 'flex', alignItems: "center", flexDirection: 'column' }}>
                    <h1><b>FORM</b></h1>
                    <form onSubmit={this.onSubmitHandler} >
                        <input type={'text'} placeholder={'Enter Name'} name="name" value={this.state.name} onChange={this.onChangeHandler} /> <br />
                        <input type={'text'} placeholder={'Enter EmailId'} name="email" value={this.state.email} onChange={this.onChangeHandler} /><br />
                        {/* <input type={'number'} placeholder={'Enter Number'} value={this.state.formData.number} onChange={this.onChangeHandlerNumber} /><br />
                    <input type={'text'} placeholder={'Enter City'} value={this.state.formData.city} onChange={this.onChangeHandlerCity} /><br /> */}
                        <button type='submit'  >Submit</button>
                    </form>

                    {displayList}

                    {/* {this.array.arr.map((item) => {
                        console.log(item)
                        return (

                            <ul style={{ listStyle: 'none' }}>
                                <li>Name: {item.name}</li>
                                <li>Email-Id: {item.email}</li>
                                <li>Phone Number: {this.state.formData.number}</li>
                    <li>City Name: {this.state.formData.city}</li>

                            </ul>
                        )

                    })} */}
                </div>
            </>
        )
    }
}

export default Form
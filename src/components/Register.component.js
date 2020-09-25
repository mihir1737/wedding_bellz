import React, { Component } from 'react'
import axios from 'axios'

class Register extends Component {
    constructor(props) {
        super(props)
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeCity = this.onChangeCity.bind(this);
        this.onchangeGender = this.onChangeGender.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: "",
            email: "",
            password: "",
            city: "",
            gender: "",
            message:"",
            errorMessage: ""
        }
    }
    onChangeName(event) {
        this.setState({
            name: event.target.value
        })
    }
    onChangeEmail(event) {
        this.setState({
            email: event.target.value
        })
    }
    onChangePassword(event) {
        this.setState({
            password: event.target.value
        })
    }
    onChangeCity(event) {
        this.setState({
            city: event.target.value
        })
    }
    onChangeGender(event) {
        this.setState({
            gender: event.target.value
        })
    }
    onSubmit(event) {   
        event.preventDefault();
        const user = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            city: this.state.city,
            gender: this.state.gender
        }
        axios.post('http://localhost:8000/register', user)
            .then(
                res => { console.log('Response arrived'); console.log(res.data) 
                this.setState({
                    message:"Successfully registerd.",
                    errorMessage:""
                })    
            }
            )
            .catch(error => {
                console.log(error)
                this.setState(
                    {
                        message:"",
                        errorMessage: "Username Already available"
                    })
            })

    }

    render() {
        return <div>
            <form onSubmit={this.onSubmit}>
                <div className="container">
                    <h1>Registeration Form</h1>
                    <p>Please fill in this form to create an account.</p>
                    <hr />
                    <div className="form-group">
                        <label>Name </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.name}
                            onChange={this.onChangeName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Email </label>
                        <input type="email"
                            required
                            className="form-control"
                            value={this.state.email}
                            onChange={this.onChangeEmail}
                        />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type="password"
                            required
                            className="form-control"
                            value={this.state.password}
                            onChange={this.onChangePassword}
                        />
                    </div>
                    <div className="form-group">
                        <label>City</label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.city}
                            onChange={this.onChangeCity}
                        />
                    </div>

                    <div onChange={this.onChangeGender.bind(this)}>
                        <label>Gender</label><br />
                        <input type="radio" value="male" name="gender" />
                        <label>Male</label><br />
                        <input type="radio" value="female" name="gender" />
                        <label>Female</label>
                    </div>

                    <hr />
                    <p>By creating an account you agree to our <a href="/register">Terms & Privacy</a>.</p>
                    <br/>
                    {this.state.errorMessage && <h5 className="error" style={{ color: 'red' }}> {this.state.errorMessage} </h5>}
                    {this.state.message && <h5 className="error" style={{ color: 'green' }}> {this.state.message} </h5>}
                    <div className="form-group">
                        <button type="submit" value="Register" className="btn btn-primary">Register</button>
                    </div>
                       
                </div>

                <div className="container signin">
                    <p>Already have an account? <a href="/login">Login</a>.</p>
                </div>
            </form>
        </div >
    }
}
export default Register
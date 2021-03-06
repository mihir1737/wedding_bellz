import React, { Component } from 'react'
import axios from 'axios'

class Login extends Component {
    constructor(props) {
        super(props)
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            email: "",
            password: "",
            message: "",
            errorMessage: ""
        }
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
    onSubmit(event) {
        event.preventDefault();
        const user = {
            email: this.state.email,
            password: this.state.password
        }
        
        axios.post('http://localhost:8000/login', user)
            .then(res => {
                console.log(res.data);
                localStorage.setItem('user', JSON.stringify(res.data))
                this.setState({
                    message: 'Successfull log in',
                    errorMessage:""
                })
                document.cookie='user=apxmfknb45mk6n4kp5nkl2mg2pcw'
                    window.location = '/' 
            }
            )
            .catch(error => {
                console.log(error.response)
                if (error.response)
                    this.setState(
                        {
                            errorMessage: "Invalid Email Id or Password",
                            message: ""
                        })
                else {
                    this.setState(
                        {
                            errorMessage: "Something went wrong,Please try again.",
                            message: ""
                        })
                }
            }
            )
    }
    render() {
        const user = JSON.parse(localStorage.getItem('user'))
        if (user !== null) {
            window.location = '/'
        }
        return (   
            <div>
                <form onSubmit={this.onSubmit}>
                    <div className="container">
                        <h1>Login Form</h1>
                        <hr />
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
                        {this.state.errorMessage && <h5 className="error" style={{ color: 'red' }}> {this.state.errorMessage} </h5>}
                        {this.state.message && <h5 style={{ color: 'green' }}> {this.state.message} </h5>}

                        <div className="form-group">
                            <button type="submit" value="Login" className="btn btn-primary">Login</button>
                        </div>
                    </div>
                </form>
                <div className="container signin">
                    <p>Note have an account? <a href="/register">Register</a>.</p>
                </div>
            </div>
        )
    }
}

export default Login
import React, { Component } from 'react'
import axios from 'axios'
import { Form } from 'react-bootstrap'

class Profile extends Component {
    constructor(props) {
        super(props)
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeCity = this.onChangeCity.bind(this);
        this.onchangeGender = this.onChangeGender.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeEdit = this.onChangeEdit.bind(this);

        this.state = {
            name: "",
            email: "",
            city: "",
            gender: "", ////////////////////////////update it....
            male: null,
            edit: null,
            edit: "",
            errorMessage: "",
            message: ""
        }
    }
    onChangeEdit(event) {
        if (this.state.edit)
            this.setState({
                edit: false
            })
        else
            this.setState({
                edit: true
            })
        console.log(this.state.edit)
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
    onChangeCity(event) {
        this.setState({
            city: event.target.value
        })
    }
    onChangeGender(event) {
        this.setState({
            gender: event.target.value
        })
        if(event.target.value==="male"){
            this.setState({
            male:true
            })
        }
        else{
            this.setState({
                male:false
                })        
        }
        console.log(this.state.gender+'  '+this.state.male)
    }
    componentDidMount() {
        const user = JSON.parse(localStorage.getItem('user'))
        this.setState({
            name: user.name,
            email: user.email,
            city: user.city,
            gender: user.gender, ////////////////////////////update it....
            edit: true,
            errorMessage: "",
            message: ""
        })
        if (user.gender === "male") {
            this.setState({ male: true })
        }
        if(user.gender==="female"){
            this.setState({ male: false })
        }
    }
    onSubmit(event) {
        event.preventDefault();
        const user = {
            name: this.state.name,
            email: this.state.email,
            city: this.state.city,
            gender: this.state.gender
        }
        axios.post('http://localhost:8000/register/' + JSON.parse(localStorage.getItem('user')).email, user)
            .then(
                res => {
                    console.log('Response arrived'); console.log(res.data)
                    localStorage.setItem('user', JSON.stringify(res.data))
                    this.setState({
                        message: "Successfully Updated.",
                        errorMessage: ""
                    })
                }
            )
            .catch(error => {
                console.log(error)
                this.setState(
                    {
                        message: "",
                        errorMessage: "Email Already available"
                    })
            })
    }
    render() {
        console.log(this.state.gender+'  '+this.state.male)

        return <div>
            <Form onSubmit={this.onSubmit}>
                <div className="container">
                    <h1>Profile Page</h1>
                    <hr />
                    <Form.Check
                        type="switch"
                        id="custom-switch"
                        label="Edit Profile"
                        value={this.state.edit}
                        onChange={this.onChangeEdit}
                    />
                    <div className="form-group">
                        <label>Name </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.name}
                            onChange={this.onChangeName}
                            readOnly={this.state.edit}
                        />
                    </div>
                    <div className="form-group">
                        <label>Email </label>
                        <input type="email"
                            required
                            className="form-control"
                            value={this.state.email}
                            onChange={this.onChangeEmail}
                            readOnly={this.state.edit}
                        />
                    </div>
                    <div className="form-group">
                        <label>City</label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.city}
                            onChange={this.onChangeCity}
                            readOnly={this.state.edit}
                        />
                    </div>

                    <div onChange={this.onChangeGender.bind(this) }>
                        <label>Gender</label><br />
                        {this.state.edit ?
                            <input type="radio" value="female" name="gender" disabled={'disabled'} checked={!this.state.male} /> :
                            <input type="radio" value="female" name="gender" checked={!this.state.male} />
                        }
                        <label>Female</label><br />

                        {this.state.edit ?
                            <input type="radio" value="male" name="gender" disabled={'disabled'} checked={this.state.male} /> :
                            <input type="radio" value="male" name="gender" checked={this.state.male} />
                        }
                        <label>Male</label><br />
                    </div>

                    <hr />

                    {this.state.errorMessage && <h5 className="error" style={{ color: 'red' }}> {this.state.errorMessage} </h5>}

                    <div className="form-group">
                        <button type="submit" value="Update" className="btn btn-primary">Update</button>
                    </div>

                </div>
            </Form>
        </div >
    }
}
export default Profile
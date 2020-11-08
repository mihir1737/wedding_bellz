import React, { Component } from 'react'
import axios from 'axios'
class InsertService extends Component {
    constructor(props) {
        super(props)
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeCity = this.onChangeCity.bind(this);
        this.onChangeContact = this.onChangeContact.bind(this);
        this.onChangePrice = this.onChangePrice.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeService = this.onChangeService.bind(this);
        this.onChangeFile = this.onChangeFile.bind(this)
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            service: "",
            name: "",
            city: "",
            contact: 0,
            price: 0,
            description: "",
            selectedFile: null,
            message: "",
            errorMessage: ""
        }
    }
    onChangeService(event) {
        this.setState({
            service: event.target.value,
            message: "",
            errorMessage: ""
        })
        console.log(event.target.value)
    }
    onChangeName(event) {
        this.setState({
            name: event.target.value,
            message: "",
            errorMessage: ""
        })
    }
    onChangeContact(event) {
        this.setState({
            contact: event.target.value,
            message: "",
            errorMessage: ""
        })
    }

    onChangeCity(event) {
        this.setState({
            city: event.target.value,
            message: "",
            errorMessage: ""
        })
    }
    onChangeDescription(event) {
        this.setState({
            description: event.target.value,
            message: "",
            errorMessage: ""
        })
    }
    onChangePrice(event) {
        this.setState({
            price: event.target.value,
            message: "",
            errorMessage: ""
        })
    }
    onChangeFile(event) {
        this.setState({
            selectedFile: event.target.files[0],
            message: "",
            errorMessage: ""
        })
    }
    onSubmit(event) {
        event.preventDefault();
        const item = {
            service: this.state.service,
            name: this.state.name,
            description: this.state.description,
            price: this.state.price,
            city: this.state.city,
            contact: this.state.contact
        }
        console.log(item.service)
        var data = new FormData()
        data.append('file', this.state.selectedFile)
        data.append('user', localStorage.getItem('user'))
        data.append('item', JSON.stringify(item))

        axios.post('http://localhost:8000/admin/insert', data)
            .then(
                res => {
                    console.log('Response arrived'); console.log(res)
                    this.setState({
                        message: "Successfully added.",
                        errorMessage: ""
                    })
                }
            )
            .catch(error => {
                console.log(error)
                this.setState(
                    {
                        message: "",
                        errorMessage: "Something went wrong."
                    })
            })

    }

    render() {
        const user = JSON.parse(localStorage.getItem('user'))
        if (user === null) {
            window.location = '/'
        }
        if(user.usertype!=='admin'){
            window.location ='/'
        }
        return <div>
            <form onSubmit={this.onSubmit}>
                <div className="container">
                    <h1>Insert Service/Product</h1>
                    <hr />
                    <div className="form-group">
                        <select value={this.state.service} onChange={this.onChangeService}>
                            <option selected defaultValue value="bridalwear">bridalwear</option>
                            <option value="groomwear">groomwear</option>
                            <option value="photographer">photographer</option>
                            <option value="makeup">makeup</option>
                            <option value="venue">venue</option>
                        </select>
                    </div>
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
                        <label>City</label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.city}
                            onChange={this.onChangeCity}
                        />
                    </div>

                    <div className="form-group">
                        <label>Description</label>
                        <textarea type="text"
                            required
                            className="form-control"
                            value={this.state.description}
                            onChange={this.onChangeDescription}
                        />
                    </div>


                    <div className="form-group">
                        <label>Price</label>
                        <input type="number"
                            required
                            className="form-control"
                            value={this.state.price}
                            onChange={this.onChangePrice}
                        />
                    </div>

                    <div className="form-group">
                        <label>Contact No</label>
                        <input type="number"
                            required
                            className="form-control"
                            value={this.state.contact}
                            onChange={this.onChangeContact}
                        />
                    </div>
                    <div class="form-group files">
                        <label>Upload Image</label>
                        <input type="file" className="form-control" onChange={this.onChangeFile} />
                    </div>

                    <br />
                    {this.state.errorMessage && <h5 className="error" style={{ color: 'red' }}> {this.state.errorMessage} </h5>}
                    {this.state.message && <h5 className="error" style={{ color: 'green' }}> {this.state.message} </h5>}
                    <div className="form-group">
                        <button type="submit" value="Add" className="btn btn-primary">Add</button>
                    </div>

                </div>
            </form>
        </div >
    }
}

export default InsertService

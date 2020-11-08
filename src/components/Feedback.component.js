import React, { Component } from 'react'
import axios from 'axios'
import StarRatings from 'react-star-ratings';
const localUrl = 'http://localhost:8000/static'
const ShowFeedback = props => (
    <tr>
        <td>{props.feedback.email}</td>
        <td>{props.feedback.rating}</td>
        <td><textarea readOnly className="form-control" rows="3">{props.feedback.feedback}</textarea></td>
        <td>{props.feedback.date.substring(1, 11)}</td>
        <td>
            <a href="/feedback" onClick={() => { props.deleteFeedback(props.feedback._id) }}>delete</a>
        </td>
        <td><img src={localUrl + props.feedback.img} style={{ "height": "100px", "width": "100px" }} alt="" /></td>
    </tr>
)

class Feedback extends Component {
    constructor(props) {
        super(props)
        this.changeRating = this.changeRating.bind(this);
        this.onChangeFeedback = this.onChangeFeedback.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeFile = this.onChangeFile.bind(this)
        this.state = {
            data: null,
            date: null,
            feedback: "",
            selectedFile: null,
            message: "",
            errorMessage: ""
        }
    }
    componentDidMount() {
        if (JSON.parse(localStorage.getItem('user')).usertype === 'admin') {
            this.getData();
            console.log('data added for admin.')
            console.log(this.state.data)
        }
    }

    changeRating(newRating, name) {
        this.setState({
            rating: newRating,
            message: "",
            errorMessage: ""
        });
    }
    onChangeFeedback(event) {
        this.setState({
            feedback: event.target.value,
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
        const feedback = {
            rating: this.state.rating,
            feedback: this.state.feedback,
            date: JSON.stringify(new Date())
        }
        var data = new FormData()
        data.append('file', this.state.selectedFile)
        data.append('user', localStorage.getItem('user'))
        data.append('feedback', JSON.stringify(feedback))
        axios.post('http://localhost:8000/feedback', data)
            .then(res => {
                console.log(res.data);
                this.setState({
                    message: 'feedback added.',
                    errorMessage: ""
                })
            }
            )
            .catch(error => {
                console.log(error.response)
                if (error.response)
                    this.setState(
                        {
                            errorMessage: "something went wrong,please try again.",
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
    getData() {
        axios.get('http://localhost:8000/admin/feedback')
            .then(
                res => {
                    console.log(res)
                    this.setState({
                        data: res.data
                    })
                }
            )
            .catch(error => {
                console.log(error)
                this.setState(
                    {
                        errorMessage: "Something went wrong,Please try again."
                    })
            })
    }
    deleteFeedback(id) {
        const user=JSON.parse(localStorage.getItem('user'))
        axios.delete('http://localhost:8000/admin/feedback/'+id,{user:user});
        this.getData()
    }
    render() {
        const user = JSON.parse(localStorage.getItem('user'))
        if (user === null) {
            window.location = '/'
        }
        if (user.usertype === 'admin') {
            if (this.state.data) {
                return (
                    <div>
                        <h3>Logged Exercises</h3>
                        <table className="table">
                            <thead className="thead-light">
                                <tr>
                                    <th>Username</th>
                                    <th>Rating</th>
                                    <th>Feedback</th>
                                    <th>Date(yyy-mm-dd)</th>
                                    <th>Actions</th>
                                    <th>Image</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.data.map(currentfeedback => {
                                    return <ShowFeedback feedback={currentfeedback} deleteFeedback={this.deleteFeedback} key={currentfeedback._id} />;
                                })}
                            </tbody>
                        </table>
                    </div>
                )
            }
            else {
                return (<div>No data</div>)
            }
        }
        else {
            return (
                <div>
                    <form onSubmit={this.onSubmit}>
                        <div className="container">
                            <h1>Feedback Form</h1>
                            <hr />
                            <div className="form-group">
                                <label>Give Star</label><br />
                                <StarRatings
                                    rating={this.state.rating}
                                    starRatedColor="green"
                                    changeRating={this.changeRating}
                                    numberOfStars={5}
                                    name='rating'
                                />
                            </div>

                            <div className="form-group">
                                <label>feedback</label>
                                <textarea
                                    required
                                    className="form-control"
                                    value={this.state.feedback}
                                    onChange={this.onChangeFeedback}
                                />
                            </div>
                            <div class="form-group files">
                                <label>Upload Image</label>
                                <input type="file" class="form-control" onChange={this.onChangeFile} />
                            </div>

                            {this.state.errorMessage && <h5 className="error" style={{ color: 'red' }}> {this.state.errorMessage} </h5>}
                            {this.state.message && <h5 style={{ color: 'green' }}> {this.state.message} </h5>}

                            <div className="form-group">
                                <button type="submit" value="Feedback" className="btn btn-primary">Give Feedback</button>
                            </div>
                        </div>
                    </form>
                </div>
            )
        }
    }
}

export default Feedback
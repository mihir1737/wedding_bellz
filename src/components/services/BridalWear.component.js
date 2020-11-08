import React, { Component } from 'react'
import axios from 'axios'
import Card from './CardUI'
class BridalWear extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: []
        }
    }
    componentDidMount() {
        this.getData();
    }
    getData() {
        axios.get('http://localhost:8000/service/bridalwear')
            .then(
                res => {
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
    render() {
        return (
            <div className='container-fluid d-flex justify-content-center'>
                <div className='row'>
                    {
                        this.state.data.map((item) => {
                            item['service']='Bridalwear'
                            return <div className='col-md-4'><Card props={item}></Card></div>
                        })
                    }
                </div>
            </div>
        )
    }
}

export default BridalWear

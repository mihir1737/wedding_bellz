import React, { Component } from 'react'
import axios from 'axios'
class BridalWear extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: []
        }
    }
    componentDidMount() {
        axios.get('http://localhost:8000/service/destination')
            .then(res => {
                if (res.data.length > 0) {
                    const arr = res.data
                    console.log(arr)
                    const fetched = arr.map(d => <div>
                        <p>{d.Name}</p>
                        <p>{d.City}</p>
                    </div>)
                    this.setState({
                        data: fetched
                    })
                }
            })
    }
    render() {
        return (
            <div>
                <h2>Jay Hind</h2>
                {this.state.data}
            </div>
        )
    }
}

export default BridalWear

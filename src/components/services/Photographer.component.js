import React, { Component } from 'react'
import axios from 'axios'
class Photographer extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            data:[]
        }
    }
    componentDidMount(){
        axios.get('http://localhost:8000/services')
        .then(response=>{
            if(response.data.length>0)
            {
                console.log(response.data)
            }
        })
    }
    render() {
        return (
            <div>
            </div>
        )
    }
}

export default Photographer

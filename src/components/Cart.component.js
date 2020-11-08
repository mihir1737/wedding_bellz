import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

import swal from 'sweetalert';
const localUrl = 'http://localhost:8000/static'
const ref = React.createRef();

const ShowService = props => (
    <tr>
        <td>{props.service.Name}</td>
        <td>{props.service.City}</td>
        <td>{props.service.Price}</td>
        <td>{props.service.Contact}</td>
        <td>
            <a href="/cart" onClick={() => { removeDataToLocalStorage(props.service._id) }}>delete</a>
        </td>
        <td><img src={localUrl + props.service.img} style={{ "height": "100px", "width": "100px" }} alt="" /></td>
    </tr>
)
const removeDataToLocalStorage = (id) => {
    var cart = JSON.parse(localStorage.getItem("cart") || "[]");

    console.log(id)
    // Modifying
    cart = cart.filter(obj => obj._id !== id);
    // Saving
    localStorage.setItem("cart", JSON.stringify(cart));
    swal({
        title: "Removed from cart",
        icon: "success",
    });
}

class Cart extends Component {
    constructor(props) {
        super(props)
        this._exportPdf = this._exportPdf.bind(this)
        this.state = {
            data: [],
            updated: false,
            height: 0,
            width: 0,
            total: 0
        }
    }
    _exportPdf = () => {
        var divHeight = this.state.height;
        var divWidth = this.state.width;
        var ratio = divHeight / divWidth;
        html2canvas(document.getElementById("capture"))
            .then(canvas => {
                const imgData = canvas.toDataURL('image/png');
                const pdf = new jsPDF({
                    orientation: 'landscape',
                });
                const imgProps = pdf.getImageProperties(imgData);
                const pdfWidth = pdf.internal.pageSize.getWidth();
                const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
                pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
                pdf.save('download.pdf');
            }
            );
    }
    componentDidMount() {
        const height = this.divElement.clientHeight;
        const width = this.divElement.clientWidth;
        this.setState({
            height: height,
            width: width
        });
        console.log(height)
        console.log(width)
        let cart = JSON.parse(localStorage.getItem('cart'))
        if (cart !== null) {
            var tot = 0;
            cart.map(item => { tot = tot + parseInt(item.Price) })
            this.setState({
                total: tot,
                data: cart,
                updated: true
            })
        }
        else {
            this.setState({
                total: 0,
                data: [],
                updated: true
            })
        }
    }
    render() {
        console.log(this.state.width)
        const user = JSON.parse(localStorage.getItem('user'))
        if (user === null) {
            window.location = '/'
        }
        console.log(this.state.data)
        if (this.state.updated && this.state.data.length === 0) {
            return (<div>
                <h1 className="text-center">Your Cart is Empty</h1>
                <Link to='/'><h2 className='text-center'>Add something to Cart</h2></Link>
            </div>)
        }
        else {
            return (
                <div>
                    <h3 style={{
                        color: 'SlateBlue',
                        position: 'absolute', left: '50%',
                        transform: 'translate(-50%, -50%)'
                    }}>Your Cart</h3>
                    <br />
                    <div ref={(divElement) => { this.divElement = divElement }} id="capture">
                        <table className="table">
                            <thead className="thead-light">
                                <tr>
                                    <th>Name</th>
                                    <th>City</th>
                                    <th>Price</th>
                                    <th>Contact</th>
                                    <th>Actions</th>
                                    <th>Image</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.data.map(currentservice => {
                                    return <ShowService service={currentservice} deleteService={this.removeDataToLocalStorage} key={currentservice._id} />;
                                })}
                            </tbody>
                        </table>
                        <h1 >Total Amount:-{this.state.total}</h1>
                    </div>
                    <br></br>
                    <button className="btn btn-success" style={{
                        position: 'absolute', left: '50%',
                        transform: 'translate(-50%, -50%)'
                    }} onClick={this._exportPdf}>Generate Pdf</button>
                </div>
            )
        }
    }
}

export default Cart
import React from "react";
import "./card-style.css";
import { Button } from 'react-bootstrap';
import swal from 'sweetalert';
const localUrl = 'http://localhost:8000/static'

const Card = ({ props }) => {

  const SaveDataToLocalStorage = () => {
    if (localStorage.getItem('user')) {


      var cart = JSON.parse(localStorage.getItem("cart") || "[]");

      // Modifying

      cart.push(props);

      // Saving
      localStorage.setItem("cart", JSON.stringify(cart));
      swal({
        title: "Added to cart",
        icon: "success",
      });
    } else {
      alert("Please Log In first");
    }
  }
  return (
    <div className='card text-center shadow'>
      <div className="btn btn-success btn-lg">{props.service}</div>
      <div className='overflow'>
        {console.log(props)}
        <img src={localUrl + props.img } alt='img' height={300} className='card-img-top' />
      </div>
      <div className='card-body text-dark'>
        <h4 className='card-title'>{props.Name}</h4>
        <p className='card-text text-secondary'>
          {props.Description}
        </p>
        <h3 className='card-text'>{props.City}</h3>
        <h2 className='card-text'>Price:-Rs.{props.Price}</h2>
        <Button onClick={SaveDataToLocalStorage}>
          Add to Cart
          </Button>
      </div>
    </div>
  );
};

export default Card;
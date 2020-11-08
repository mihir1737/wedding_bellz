import React from "react";
import {Link} from 'react-router-dom'
import "./card-style.css";
import { Button } from 'react-bootstrap';
import swal from 'sweetalert';
const localUrl= 'http://localhost:8000/static'
const Card = ({ props }) => {
  const removeDataToLocalStorage=()=>{
    var cart = JSON.parse(localStorage.getItem("cart") || "[]");

    console.log(props)
    // Modifying
    cart=cart.filter(obj=>obj._id!==props._id);
    // Saving
    localStorage.setItem("cart", JSON.stringify(cart));
    swal({
      title: "Removed from cart",
      icon: "success",
    });
    setTimeout(function(){ window.location.reload(false) }, 3000);
  }
  return (
    <div className='card text-center shadow'>
      <div className='overflow'>
        <img src={localUrl+props.img || "https://picsum.photos/200"} alt='img' height={300} className='card-img-top' />
      </div>
      <div className='card-body text-dark'>
        <h4 className='card-title'>{props.Name}</h4>
        <p className='card-text text-secondary'>
          {props.Description}
        </p>
        <h3 className='card-text'>{props.City}</h3>
        <h2 className='card-text'>Price:-Rs.{props.Price}</h2>
        <Link to={{
          pathname:'/cart',
          data:{props}
          }}>
          <Button onClick={removeDataToLocalStorage}>
            Remove from Cart
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
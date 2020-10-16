import React from "react";
import "./card-style.css";

const Card = ({ props }) => {
  console.log(JSON.stringify(props))

  return (
    <div className='card text-center shadow'>
      <div className='overflow'>
        <img src={props.imgsrc || "https://picsum.photos/200"} alt='img' className='card-img-top' />
      </div>
      <div className='card-body text-dark'>
        <h4 className='card-title'>{props.Name}</h4>
        <p className='card-text text-secondary'>
          {props.Address}
        </p>
        <h3 className='card-text'>{props.City}</h3>
        <h2 className='card-text'>Price:-Rs.{props.Price}</h2>
        <a href='#' className='btn btn-outline-success'>
          Add to Package
        </a>
      </div>
    </div>
  );
};

export default Card;
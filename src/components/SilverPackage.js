import React from "react";
import {Link} from "react-router-dom";
export default function SilverPackage({ cart, setCart, customer }) {
  return (
    <div>
      <h1>Packages</h1>

      <div>
        <div>
          <div className="products">
            <h2 >Silver Package - 466000</h2>
            <div className="row">
              <div className="col-12 col-lg-4 col-md-6">
                <div className="card" >
                  <div className="btn btn-success btn-lg">Photogaphy</div>
                  <img src={require("./img/Photo1.jpg")} style={{ "height": "300px" }} alt="" />
                  <div className="card-body"><div className="card-title h5">Candid Entertainment</div>
                    <div className="card-title h5"></div><para></para>
                    <h4>₹50000</h4>
                    <h6>Rajkot</h6>
                  </div></div></div>
              <div className="col-12 col-lg-4 col-md-6">
                <div className="card" >
                  <div className="btn btn-success btn-lg">Makeup</div>
                  <img src={require("./img/makeup1.jpg")} style={{ "height": "300px" }} alt="" />
                  <div className="card-body"><div className="card-title h5">The Glam Makeup</div>
                    <div className="card-title h5"></div><para></para>
                    <h4>₹16000</h4>
                    <h6>Rajkot</h6>
                  </div></div></div>
              <div className="col-12 col-lg-4 col-md-6">
                <div className="card" >
                  <div className="btn btn-success btn-lg">Destination</div>
                  <img src={require("./img/desti.png")} style={{ "height": "300px" }} alt="" />
                  <div className="card-body"><div className="card-title h5">Novotel Hotel</div>
                    <div className="card-title h5"></div><para></para>
                    <h4>₹300000</h4>
                    <h6>Rajkot</h6>
                  </div></div></div>
              <div className="col-12 col-lg-4 col-md-6">
                <div className="card" >
                  <div className="btn btn-success btn-lg">Bridal</div>
                  <img src={require("./img/bridal1.png")} style={{ "height": "300px" }} alt="" />
                  <div className="card-body">
                    <div className="card-title h5">101 hues</div>
                    <div className="card-title h5"></div>
                    <para></para>
                    <h4>₹50000</h4>
                    <h6>Rajkot</h6>
                  </div>
                </div></div>
              <div className="col-12 col-lg-4 col-md-6">
                <div className="card" >
                  <div className="btn btn-success btn-lg">Groom</div>
                  <img src={require("./img/Groom1.jpg")} style={{ "height": "300px" }} alt="" />
                  <div className="card-body">
                    <div className="card-title h5">Paridhi</div>
                    <div className="card-title h5"></div>
                    <para></para>
                    <h4>₹50000</h4>
                    <h6>Rajkot</h6>
                  </div>
                </div></div></div>
          </div>
        </div> </div>

      <div style={{ marginTop: "3%" }}>
        <button
          type="button"
          className="btn btn-warning btn-block text-white ml-2 mr-2"
          style={{ borderRadius: 10 }}
        // onClick={handleOpen}
        >
          <Link to="/SilverPackage.pdf" target="_blank" download><b> Proceed to Checkout </b></Link>
          
        </button>
      </div>
    </div>
  );
}

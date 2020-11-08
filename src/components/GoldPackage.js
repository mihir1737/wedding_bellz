import React from "react";
import {Link} from "react-router-dom";

export default function GoldenPackage({ cart, setCart, customer }) {
  return (
    <>
      <div>
        <div>
          <h2 >Golden Package - ₹720000</h2>
          <div className="row">
            <div className="col-12 col-lg-4 col-md-6">
              <div className="card" >
                <div className="btn btn-success btn-lg">Photogaphy</div>
                <img src={require("./img/photo3.jpg")} style={{ "height": "300px" }} alt="" />
                <div className="card-body"><div className="card-title h5">Mac studio</div>
                  <div className="card-title h5"></div><para></para>
                  <h4>₹150000</h4>
                  <h6>Vadodara</h6>
                </div></div></div>
            <div className="col-12 col-lg-4 col-md-6">
              <div className="card" >
                <div className="btn btn-success btn-lg">Makeup</div>
                <img src={require("./img/makeup3.jpg")} style={{ "height": "300px" }} alt="" />
                <div className="card-body"><div className="card-title h5">Grace & Glamour</div>
                  <div className="card-title h5"></div><para></para>
                  <h4>₹30000</h4>
                  <h6>Vadodara</h6>
                </div></div></div>

            <div className="col-12 col-lg-4 col-md-6">
              <div className="card" >
                <div className="btn btn-success btn-lg">Destination</div>
                <img src={require("./img/desti3.jpg")} style={{ "height": "300px" }} alt="" />
                <div className="card-body"><div className="card-title h5">Grand space banquet</div>
                  <div className="card-title h5"></div><para></para>
                  <h4>₹400000</h4>
                  <h6>Vadodara</h6>
                </div></div></div>

            <div className="col-12 col-lg-4 col-md-6">
              <div className="card" >
                <div className="btn btn-success btn-lg">Bridal</div>
                <img src={require("./img/bridal3.jpg")} style={{ "height": "300px" }} alt="" />
                <div className="card-body">
                  <div className="card-title h5">Vibgyor fashion</div>
                  <div className="card-title h5"></div>
                  <para></para>
                  <h4>₹75000</h4>
                  <h6>Vadodara</h6>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-4 col-md-6">
              <div className="card" >
                <div className="btn btn-success btn-lg">Groom</div>
                <img src={require("./img/Groom3.jpg")} style={{ "height": "300px" }} alt="" />
                <div className="card-body">
                  <div className="card-title h5">Royal Tradiaional</div>
                  <div className="card-title h5"></div>
                  <para></para>
                  <h4>₹65000</h4>
                  <h6>Vadodara</h6>
                </div>
              </div></div>
          </div>
        </div>
      </div>

      <div></div>
      <div style={{ marginTop: "3%" }}>
        <button
          type="button"
          className="btn btn-warning btn-block text-white ml-2 mr-2"
          style={{ borderRadius: 10 }}
        // onClick={handleOpen}
        >
          <Link to="/GoldenPackage.pdf" target="_blank" download><b> Proceed to Checkout </b></Link>
        </button>
      </div>
    </>
  );
}

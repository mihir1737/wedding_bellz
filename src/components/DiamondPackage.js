import React from "react";
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import {Link} from 'react-router-dom'
export default function DiamondPackage() {

  return (
    <div>
      <div>
        <div className="products">
          <h2 >Diamond Package - ₹1060000</h2>
          <div className="row">
            <div className="col-12 col-lg-4 col-md-6">
              <div className="card" >
                <div className="btn btn-success btn-lg">Photogaphy</div>
                <img src={require("./img/photo2.jpg")} style={{ "height": "300px" }} alt="" />
                <div className="card-body"><div className="card-title h5">Urban Magic</div>
                  <div className="card-title h5"></div><para></para>
                  <h4>₹155000</h4>
                  <h6>Ahmedabad</h6>
                </div></div></div>
            <div className="col-12 col-lg-4 col-md-6">
              <div className="btn btn-success btn-lg">Makeup</div>
              <div className="card" >
                <img src={require("./img/makeup2.jpg")} style={{ "height": "300px" }} alt="" />
                <div className="card-body"><div className="card-title h5">Bonanza Makeover</div>
                  <div className="card-title h5"></div><para></para>
                  <h4>₹50000</h4>
                  <h6>Ahmedabad</h6>
                </div></div></div>
            <div className="col-12 col-lg-4 col-md-6">
              <div className="card" >
                <div className="btn btn-success btn-lg">Destination</div>
                <img src={require("./img/desti2.jpg")} style={{ "height": "300px" }} alt="" />
                <div className="card-body"><div className="card-title h5">Karnavati Club</div>
                  <div className="card-title h5"></div><para></para>
                  <h4>₹700000</h4>
                  <h6>Ahmedabad</h6>
                </div></div></div>
            <div className="col-12 col-lg-4 col-md-6">
              <div className="card" >
                <div className="btn btn-success btn-lg">Bridal</div>
                <img src={require("./img/bridal2.png")} style={{ "height": "300px" }} alt="" />
                <div className="card-body">
                  <div className="card-title h5">Kimana Design</div>
                  <div className="card-title h5"></div>
                  <para></para>
                  <h4>₹80000</h4>
                  <h6>Ahmedabad</h6>
                </div>
              </div></div>
            <div className="col-12 col-lg-4 col-md-6">
              <div className="card" >
                <div className="btn btn-success btn-lg">Groom</div>
                <img src={require("./img/Groom2.jpg")} style={{ "height": "300px" }} alt="" />
                <div className="card-body">
                  <div className="card-title h5">Peach Mirror</div>
                  <div className="card-title h5"></div>
                  <para></para>
                  <h4>₹75000</h4>
                  <h6>Ahmedabad</h6>
                </div></div>
            </div></div>
        </div>
      </div>
      <div style={{ marginTop: "1%" }}>
        <button
          type="button"
          className="btn btn-warning btn-block text-white ml-2 mr-2"
          style={{ borderRadius: 10 }}
        >
          <Link to="/DiamondPackage.pdf" target="_blank" download><b> Proceed to Checkout </b></Link>
          
        </button>

      </div>
    </div>
  );
}

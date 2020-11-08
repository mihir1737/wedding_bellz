import React from "react";


export default function PackagePlan({ cart, setCart, customer, PackagePlan2 }) {

  return (
        <div >
          <div></div>
          <div class="container">
            <div class="row">
              <div class="col-sm-3 mt-10">
                <a href='/silverPackage'><img src={require("./img/Silver.png")}  style={{ cursor: "pointer" }} alt=""/></a>
                <div className="card-title h3">Silver Package</div>
                <h4>₹466000</h4>
                <div className="card-title h5">This is the Silver Plan package.This is the Silver Plan package.This is the Silver Plan package.This is the Silver Plan package</div></div>
              <div class="col-sm-3 mt-10">
                <a href='/goldPackage'><img src={require("./img/Gold.png")} style={{ cursor: "pointer" }} alt=""/></a>
                <div className="card-title h3">Golden Package</div>
                <h4>₹720000</h4>
                <div className="card-title h5">This is the Gold Plan package.This is the Gold Plan package.This is the Gold Plan package.This is the Gold Plan package</div></div>
              <div class="col-sm-3 mt-10">
                <a href='/diamondPackage'>
                  <img src={require("./img/Diamond.png")} style={{ cursor: "pointer" }} alt=""/></a>
                <div className="card-title h3">Diamond Package</div>
                <h4>₹1060000</h4>
                <div className="card-title h5">This is the Diamond Plan package.This is the Diamond Plan package.This is the Diamond Plan packageThis is the Diamond Plan package</div></div>
              <div class="col-sm-3 mt-10">
                <a href='/cart'><img src={require("./img/Customize.png")}style={{ cursor: "pointer" }} alt=""/></a>
                <div className="card-title h3">Customise Package</div>
                <h4></h4>
                <div className="card-title h5">Create your own customise package.</div>
              </div></div></div>
        </div>
  );
}

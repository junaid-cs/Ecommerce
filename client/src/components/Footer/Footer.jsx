import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer " >
      <div className="container mt-3 mx-auto row"> 
      <div className="top  flex-wrap ">
        <div className="item col-md-6 col-lg-3 d-none d-md-flex text-center text-lg-start  ">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item col-md-6 col-lg-3 d-none d-md-flex text-center text-lg-start ">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item col-md-6 col-lg-3 d-none d-md-flex text-center text-lg-start  px-4  mt-4 mt-lg-0">
          <h1>About</h1>
          <span>
            Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit
            amet conse ctetur adipisicing elit, seddo eiusmod tempor incididunt
            ut labore etdolore.
          </span>
        </div>
        <div className="item col-md-6 col-lg-3 d-none d-md-flex text-center text-lg-start  px-4 mt-4 mt-lg-0">
          <h1>Contact</h1>
          <span>
            Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit
            amet conse ctetur adipisicing elit, seddo eiusmod tempor incididunt
            ut labore etdolore.
          </span>
        </div>
      </div>
      </div>
      <div className="bottom continer-fluid px-2">
        <div className="left d-flex flex-column flex-md-row">
          <span className="logo" style={{fontFamily:"Playfair Display"}}>Mamastore</span>
          <span className="copyright">
            © Copyright 2023. All Rights Reserved
          </span>
        </div>
        <div className="right">
          <img src="/img/payment.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;

import React from "react";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section
      id="hero"
      className="carousel slide vh-100"
      data-bs-ride="carousel"
      style={{ padding: "140px 0 0 0" }}
    >
      <Carousel className="container carousel-inner h-100 d-flex align-items-center">
        <Carousel.Item className=" text-center">
          <h2 className="text-white">Best Collections</h2>
          <h1 className="text-white py-2 fw-bold">NEW ARRIVALS</h1>
          <Link to="/products" className="btn">
            SHOP NOW
          </Link>
        </Carousel.Item>
        <Carousel.Item className="text-center">
          <h2 className="text-white">Best Price & Offers</h2>
          <h1 className="text-white py-2 fw-bold">NEW SEASON</h1>
          <Link to="/products" className="btn">
            BUY NOW
          </Link>
        </Carousel.Item>
        <Carousel.Item className="text-center">
          <h2 className="text-white">Best Time to Buy</h2>
          <h1 className="text-white py-2 fw-bold">SUMMER SALE</h1>
          <Link to="/products" className="btn">
            GET IT NOW
          </Link>
        </Carousel.Item>
      </Carousel>
    </section>
  );
}

export default Hero;

import React from "react";
import { FaStar } from "react-icons/fa6";

export default function ProductCard({ product }) {
  return (
    <div className="product-card py-3 d-flex justify-content-center align-items-center flex-column px-3">
      <div className="product-img py-3">
        <img src={product.image_src} alt="" className="d-block" />
      </div>
      <h5
        className="align-self-start mt-3"
        style={{ textTransform: "capitalize" }}
      >
        {product.name}
      </h5>
      <div className="rating align-self-start mb-2">
        <FaStar color="yellow" />
        <FaStar color="yellow" />
        <FaStar color="yellow" />
        <FaStar color="yellow" />
        <FaStar color="yellow" />
      </div>
      <h6 className="align-self-start text-success">$ {product.price}</h6>
      <button className="btn btn-danger">Shop Now</button>
    </div>
  );
}

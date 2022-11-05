import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({ serviceData }) => {
  const { img, price, title,_id } = serviceData;
  return (
    <div>
      <div className="card card-compact  bg-base-100 shadow-xl">
        <figure>
          <img className="h-72" src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p className="text-orange-600 text-xl"> Price : ${price}</p>
          <Link to={`/checkout/${_id}`} className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;

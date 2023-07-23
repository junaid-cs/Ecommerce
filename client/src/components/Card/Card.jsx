import React from "react";
import "./Card.scss";
import { Link } from "react-router-dom";

const Card = ({ item }) => {
  console.log(item);
  return (
    <Link className="link col-12 col-sm-6 col-md-3 gap-3" to={`/product/${item.id}`}>
      <div className="card border-0">
        <div className="image">
          {item?.attributes.isNew && <span>New Season</span>}
          <img
            src={
              process.env.REACT_APP_UPLOAD_URL + item.attributes?.img?.data?.attributes?.url
            }
            alt=""
            className="mainImg img-fluid"
          />
          <img
            src={
              process.env.REACT_APP_UPLOAD_URL + item.attributes?.img2?.data?.attributes?.url
            }
            alt=""
            className="secondImg"
          />
        </div>
        <h2 className="text-center text-gray">{item?.attributes.brand}</h2>
        <h2 className="text-center fs-6 text-capitalize">{item?.attributes.title}</h2>
        <div className="prices">
          <h3 className="old-price">${item.oldPrice || item?.attributes.price + 20}</h3>
          <h3 className="new-price">${item?.attributes.price}</h3>
        </div>
      </div>
    </Link>
  );
};

export default Card;

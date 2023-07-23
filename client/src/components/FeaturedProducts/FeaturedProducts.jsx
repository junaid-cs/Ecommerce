import React from "react";
import Card from "../Card/Card";
import "./FeaturedProducts.scss";
import useFetch from "../../hooks/useFetch";

const FeaturedProducts = ({ type }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
  );

  return (
    <div className="featuredProducts container">
      <div className=" row ">
        <h1 className="col-12 text-capitalize  text-center mb-2 hover-blue">{type} products</h1>
        <div className="col-12 text-capitalize text-center mb-5 ">Top products of this week</div>
      </div>
      <div className="row">
        {error
          ? "Something went wrong!"
          : loading
          ? "loading"
          : data?.map((item) => <Card item={item} key={item.id} />)}
      </div>
    </div>
  );
};

export default FeaturedProducts;

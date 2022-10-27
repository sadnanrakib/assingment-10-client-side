import React from "react";
import { Button } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";
import "./Category.css";

const Category = () => {
  const news = useLoaderData();
  console.log(news?.[0]);
  return (
    <div className="">
      <div className="category">
        <img src={news?.[0]?.image_url} alt="" />
        <h2>Name:{news?.[0]?.author.name}</h2>
        <p>{news?.[0]?.details}</p>
        <Link to="/shipping">
          <Button>Check Out</Button>
          
        </Link>
      </div>
    </div>
  );
};

export default Category;

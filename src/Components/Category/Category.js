import React from "react";
import { useLoaderData } from "react-router-dom";
import'./Category.css'

const Category = () => {
  const news = useLoaderData();
  console.log(news?.[0]);
  return (
    <div>
      <h3> Course Detail Page</h3>
      <div className="category">
        
        <img src={news?.[0]?.image_url} alt="" />
        <h2>Name:{news?.[0]?.author.name}</h2>
        <p>{news?.[0]?.title}</p>
      </div>
    </div>
  );
};

export default Category;

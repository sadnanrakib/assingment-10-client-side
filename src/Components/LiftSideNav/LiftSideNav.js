import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Courses from "../Courses/Courses";
import "./LiftSideNav.css";

const LiftSideNav = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/news-categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div className="mb-2">
      <h6>Course Name : {categories.length}</h6>
      <div className="link-btn">
        {categories.map((category) => (
          <p key={category.id}>
            <Link to={`/category/${category.id}`}>{category.name}</Link>
          </p>
        ))}
      </div>
    </div>
  );
};

export default LiftSideNav;

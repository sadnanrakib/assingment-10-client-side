import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";
import "./News.css";

const News = () => {
  const news = useLoaderData();
  console.log(news);
  const { _id, title, details, image_url, category_id } = news;
  return (
    <Card className="card-btn">
     <div>
     <Card.Img
        variant="top"
        
        src={image_url}
      />
     </div>
    <div>
    <Card.Body className="card-body">
        <Card.Title>{title}</Card.Title>
        <Card.Text>{details}</Card.Text>
        <Link to="/shipping">
          <Button>Check Out</Button>
        </Link>
      </Card.Body>
    </div>
    </Card>
  );
};

export default News;

import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import Category from "../Category/Category";
import LiftSideNav from "../LiftSideNav/LiftSideNav";
import NewsSummary from "../NewsSummary/NewsSummary";
import './Courses.css'

const Courses = () => {
  const allNews = useLoaderData();
  return (
    <div className="mt-4">
      <Container className="disply ">
        <div>
          <Row>
            <Col>
              <LiftSideNav></LiftSideNav>
            </Col>
          </Row>
        </div>
        <div>
          <Row>
            <Col>
            <h2>All Courses</h2>
              <div className="flex">
                
                {allNews.map((news) => (
                  <NewsSummary key={news._id} news={news}></NewsSummary>
                ))}
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Courses;

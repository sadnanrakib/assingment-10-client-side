import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import LiftSideNav from '../LiftSideNav/LiftSideNav';

const Courses = () => {
    
    return (
        <div>
            <Container>
              <Row>
                <Col lg="2">
                  <LiftSideNav></LiftSideNav>
                </Col>
              </Row>
              <Row>
                <Col lg="10">
                <h1>This is Courese</h1>
                </Col>
              </Row>
            
            </Container>
        </div>
    );
};

export default Courses;
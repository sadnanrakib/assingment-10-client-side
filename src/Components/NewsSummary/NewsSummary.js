import React from 'react';
import { Button, Card, Image } from 'react-bootstrap';
import { FaEye, FaRegBookmark, FaShareAlt, FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const NewsSummary = ({news}) => {
    const { _id, title, author, details, image_url, rating, total_view } = news;
    console.log(news);
    return (
        <Card className="mb-5">
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img  variant="top" style={{ height: '',width:'250px' }} src={image_url} />
                <Card.Text>
                <p>{details}</p>
                    {
                        <Link to={`/news/${_id}`}><Button>Read More</Button></Link> 
                            
                            
                    }
                </Card.Text>
            </Card.Body>
            <Card.Footer className="d-flex justify-content-between">
               
            </Card.Footer>
        </Card>
    );
};

export default NewsSummary;
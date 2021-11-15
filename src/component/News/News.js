import React from 'react';
import { Card, Col } from 'react-bootstrap';

const News = (props) => {
    const {author, title, description, urlToImage ,url } = props.news;
    return (
        <Col>
        <Card>
          <Card.Img variant="top" src= {urlToImage} />
          <Card.Body>
          <a href= {url}><Card.Title> {title}</Card.Title></a>
        <h6> { author }</h6>
            <Card.Text>
              { description }
              
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    );
};

export default News;
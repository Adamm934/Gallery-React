import React from 'react';
import { Card, Button } from 'react-bootstrap';

const ImageCard = ({ image, daleteImage }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image.urls.small} />
      <Card.Body>
        <Card.Title>{image.title.toUpperCase()}</Card.Title>
        <Card.Text>{image.description || image.alt_decription}</Card.Text>
        <Button variant="primary"  onClick = {() => daleteImage(image.id)}>Dalete</Button>
      </Card.Body>
    </Card>
  );
};

export default ImageCard;

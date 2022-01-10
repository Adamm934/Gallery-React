import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Headers';
import Search from './components/Search';
import ImageCard from './components/ImageCard';
import { Col, Row, Container } from 'react-bootstrap';

const API_URL = process.env.REACT_APP_API_URL || 'http://192.168.0.102:5050';

const App = () => {
  //this hook state used in order to change actions on click button
  const [word, setWord] = useState('');

  const [images, setImages] = useState([]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();

    fetch(`${API_URL}/new-image?query=${word}`)
      .then((res) => res.json())
      .then((data) => {
        setImages([{ ...data, title: word }, ...images]);
      })
      .catch((err) => {
        console.log(err);
      });
    setWord('');
  };

  const handleDeleteImage = (id) => {
    setImages(images.filter((image) => image.id !== id));
  };

  return (
    <div>
      <Header title="Images Gallery" />
      <Search word={word} setWord={setWord} handleSubmit={handleSearchSubmit} />
      <Container className="mt-4">
        <Row xs={1} md={2} lg={3}>
          {images.map((image, i) => (
            <Col key={i} className="pb-3">
              <ImageCard image={image} daleteImage={handleDeleteImage} />
            </Col>
          ))}
          ;
        </Row>
      </Container>
    </div>
  );
};

export default App;

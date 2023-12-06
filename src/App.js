import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AddCar from './modal/AddCar.js';
import DisplayCar from './components/DisplayCar.js';
const App = () => {
  const [cars, setCars] = useState([]);

  const addCar = (newCar) => {
    const existingCar = cars.find(
      (car) => car.name === newCar.name && car.model === newCar.model
    );

    if (existingCar) {
     
      setCars((prevCars) =>
        prevCars.map((car) =>
          car.name === newCar.name && car.model === newCar.model
            ? { ...car, quantity: car.quantity + newCar.quantity }
            : car
        )
      );
    } else {
    
      setCars((prevCars) => [...prevCars, newCar]);
    }
  };

  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <AddCar addCar={addCar} />
        </Col>
      </Row>
      <Row className="mt-3">
        <Col>
          <DisplayCar cars={cars} />
        </Col>
      </Row>
    </Container>
  );
};

export default App;
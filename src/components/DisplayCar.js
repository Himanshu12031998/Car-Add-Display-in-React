import React from 'react';
import { Table } from 'react-bootstrap';
const DisplayCar = ({ cars }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Name</th>
          <th>Model</th>
          <th>Quantity</th>
        </tr>
      </thead>
      <tbody>
        {cars.map((car, index) => (
          <tr key={index}>
            <td>{car.name}</td>
            <td>{car.model}</td>
            <td>{car.quantity}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default DisplayCar;
import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import IndividualDessert from "./IndividualDessert";

const Dessert = () => {
  const [desserts, setDesserts] = useState([]);

  useEffect(() => {
    fetch("/public/extraData.json")
      .then((res) => res.json())
      .then((data) => setDesserts(data));
  }, []);

  console.log(desserts);

  return (
    <div className="m-3 rounded">
      <h1 className='text-center border border-danger text-danger border-1 p-2 p-sm-4 rounded m-sm-4'>
            Desserts Section
          </h1>
      <Row xs={1} sm={2} md={3}>
        {desserts.map((dessert) => (
          <IndividualDessert
            key={dessert.id}
            dessert={dessert}
          ></IndividualDessert>
        ))}
      </Row>
    </div>
  );
};

export default Dessert;

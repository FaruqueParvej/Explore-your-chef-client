import { Card, Col, Row } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import Chef from "../Chef/Chef";

const Main = () => {
  const chefs = useLoaderData();
  console.log(chefs);
 
  return (
    <div>
      <Row xs={1} md={2} className="g-4">
        {
            chefs.map(chef=><Chef key={chef.id} chef={chef}></Chef>)
        }
      </Row>
    </div>
  );
};

export default Main;

import { Col, Row } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import Chef from "../Chef/Chef";
import Banner from "../Banner/Banner";
import Dessert from "../ExtraSection/Dessert";
import CarouselSection from "../ExtraSection/CarouselSection";

const Main = () => {
  const chefs = useLoaderData();
  // console.log(chefs);

  return (
    <div>
      <div className="m-5">
        <Banner></Banner>
      </div>
      <div className="bg-success text-center text-white p-5 m-3 rounded">
        <h1>Chef Section</h1>
      </div>
      <Row xs={1} sm={2} md={3} className="g-4 my-4 mx-md-3">
        {chefs.map((chef) => (
          <Chef key={chef.id} chef={chef}></Chef>
        ))}
      </Row>
      <div>
        <Dessert></Dessert>
      </div>
      <div>
        <CarouselSection></CarouselSection>
      </div>
    </div>
  );
};

export default Main;

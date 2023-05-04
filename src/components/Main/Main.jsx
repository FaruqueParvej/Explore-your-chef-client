import {  Row } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import Chef from "../Chef/Chef";
import Banner from "../Banner/Banner";

const Main = () => {
  const chefs = useLoaderData();
  console.log(chefs);
 
  return (
    <div>
      <div className="m-5">
        <Banner></Banner>
      </div>
      <div className="bg-success text-center text-white p-5 m-3 rounded"><h1>Chef Section</h1></div>
      <Row xs={1} md={2} className="g-4">
        {
            chefs.map(chef=><Chef key={chef.id} chef={chef}></Chef>)
        }
      </Row>
    </div>
  );
};

export default Main;

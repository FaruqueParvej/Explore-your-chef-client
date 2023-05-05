import { Col, Row } from "react-bootstrap";

const Banner = () => {
  return (
    <div>
      <Row xs={1} md={2} className="g-4">
        <Col>
          <img
            className="img-fluid"
            src="https://media.istockphoto.com/id/1081422898/photo/pan-fried-duck.jpg?s=612x612&w=0&k=20&c=kzlrX7KJivvufQx9mLd-gMiMHR6lC2cgX009k9XO6VA="
            alt=""
          />
        </Col>
        <Col  className="text-center d-flex flex-column justify-content-center align-items-center">
          <div>
            <h1 style={{ fontSize: '60px' }} >Explore</h1>
          </div>
          <div>
            <h1 style={{ fontSize: '60px' }}>Your American</h1>
          </div>
          <div>
            <h1 style={{ fontSize: '60px' }}>Chef</h1>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Banner;

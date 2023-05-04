import { Col, Container, Row } from "react-bootstrap";



const Footer = () => {
    return (
        <div>
            <footer>
      <Container fluid className="bg-dark text-white">
        <Row>
          <Col xs={12} sm={6} md={4} className="text-center py-3">
            &copy; 2023 This website. All rights reserved.
          </Col>
          <Col xs={12} sm={6} md={4} className="text-center py-3">
            123 Main Street, Anytown, USA
          </Col>
          <Col xs={12} md={4} className="text-center py-3">
            Follow us on social media:
            <ul className="list-inline">
            
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
        </div>
    );
};

export default Footer;
import { Col, Container, Row } from "react-bootstrap";
import { FaFacebook, FaInstagram,FaTwitter,FaLinkedin } from "react-icons/fa";


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
            <ul className="d-flex justify-content-center list-inline ">
            <li><FaFacebook></FaFacebook></li>
            <li className="mx-4"><FaInstagram></FaInstagram></li>
            <li><FaTwitter></FaTwitter></li>
            <li className="mx-4"><FaLinkedin></FaLinkedin></li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
        </div>
    );
};

export default Footer;
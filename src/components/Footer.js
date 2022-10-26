import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Address: to 8 to hieu thanh pho son la</h3>
        </Col>
        <Col md="4" className="footer-body">
          <h3>Phone Number: +1 662 598 1591</h3>
        </Col>
        <Col md="4" className="footer-body">
          <h3>Postal/ZIP code: 360000</h3>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;

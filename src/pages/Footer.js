import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <Container className="mt-5">
      <Row className="mt-3">
        <Col>
          <p className="text-center">&copy; 2023 Your Company Name. All rights reserved.</p>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;

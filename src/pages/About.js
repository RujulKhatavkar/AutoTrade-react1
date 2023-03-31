import React from 'react';
import Footer from "./Footer.js"
import { Container, Row, Col, Image, Card } from 'react-bootstrap';

const AboutPage = () => {
  return (
  <div><section class="page-color center"><div className="container">
    <Row >     <Col>     <h1>About Our Company</h1>
          <p>We are a team of experienced traders and developers who are passionate about making automated trading accessible to everyone.</p>
        </Col>

    </Row>
    <Row>
  <Col>
    <Card>
      <Card.Header>
        <h3>Meet Our Team</h3>
      </Card.Header>
      <Card.Body>
        <Row>
          <Col md={4}>
            <Image src="https://via.placeholder.com/150" roundedCircle />
            <h4>John Doe</h4>
            <p>Founder and Lead Developer</p>
          </Col>
          <Col md={4}>
            <Image src="https://via.placeholder.com/150" roundedCircle />
            <h4>Jane Smith</h4>
            <p>Trader and Developer</p>
          </Col>
          <Col md={4}>
            <Image src="https://via.placeholder.com/150" roundedCircle />
            <h4>Bob Johnson</h4>
            <p>Marketing and Sales</p>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  </Col> </Row></div>

  </section>
  <section className="page-white">
    <div className="container just">
        <Row className="margin ">
        <Col className="mission">

          <h3>Our Mission</h3>
          <p>Our mission is to make automated trading tools accessible to everyone, regardless of their trading experience or technical background. We believe that anyone should be able to benefit from the power of automation in their trading strategies.</p>
        </Col>
        <Col className="right1"><img className="image"src="https://img.freepik.com/free-vector/antigravity-technology-with-elements_23-2148122902.jpg?w=740&t=st=1680208908~exp=1680209508~hmac=8369283399a26dda038c9aa5059cb6395f528c3649b047b542f117891de3472e"/></Col>
      </Row>
      <Row>
        <Col><img  className="image" src="https://img.freepik.com/free-vector/red-dart-arrow-hitting-target-center-dartboard_91128-1576.jpg?w=740&t=st=1680208647~exp=1680209247~hmac=802f1c995f58124b691d9e4253da029fd4ccbfeffbac55fc3c28f81ba04b75f0"/></Col>
        <Col className="mission">
          <h3>Our Technology</h3>
          <p>Our trading tools are built using the latest technologies and industry standards to provide reliable and efficient automation for our users. We constantly improve and update our tools to ensure that our users have access to the best technology available.</p>
        </Col>
      </Row>
      </div>
  </section>
  <Footer/>
  </div>

  );
}

export default AboutPage;

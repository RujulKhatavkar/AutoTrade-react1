import Robot from '../assets/Robot.svg';
import { Container, Row, Col, Image, Card } from 'react-bootstrap';
export default function About() {
  return(<div className="page-color">
    <div className="container"><Row><Col className="Col-Home"><div>
        <h1 className="title">Welcome to Trader's Automated Trading Tool</h1>
        <p>Our tool helps you automate your trades, making your life easier and your investments more profitable.</p>
        <button>Learn More</button></div>
</Col><Col>   <div className="right"><img src={Robot} alt="React Logo" className="robot" /></div></Col></Row>
    </div></div>
)
}

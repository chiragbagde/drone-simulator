import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function About() {
  return (
    <Container>
      <Row className="mt-4">
        <Col>
          <h1>About Us</h1>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <p>Drone Simulator is a web-based application that allows you to simulate flying a drone without leaving the comfort of your own home. Our simulator is designed to be easy to use and provides a realistic experience for drone enthusiasts of all levels.</p>
          <p>If you've never flown a drone before and want to try it out but are worried about damaging it beyond repair, then consider using Drone Simulator Software to practice your drone flight skills in a simulated environment. As some of the best drones in the 
            market may cost anywhere from a few hundred dollars to over a thousand dollars, so the last thing you want to do is spend that much money on a drone only to crash it because you didn't spend enough time practicing with the controls</p>
          <p>Drone Flight Simulator isn't quite the same as flying a real drone, but it will give you enough exposure to fly one without damaging it or injuring anyone.</p>
        </Col>
      </Row>
    </Container>
  );
}

export default About;

// import { StaticImage } from 'gatsby-plugin-image'
import * as React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'

const Newslet = () => {
  return (
    <Container className="bg-primary newsletter my-5 wow fadeInUp" data-wow-delay="0.1s">
            <Container className="px-lg-5">
                <Row className="align-items-center" style={{minHeight: `250px`}}>
                    <Col sm md={12} lg={6}>
                        <h2 className="mb-4">Our Commitment to Youth &rarr;</h2>
                    </Col>
                    <Col sm md={12} lg={6} className="text-center">
                        <div className="shadow-lg bg-light mb-4 p-4" style={{fontStyle: `normal`, textAlign: `justify`, borderRadius:`30px 2px`,}}>
                        <h6 className=" text-black-50" style={{fontStyle: `normal`, textAlign: `justify`, borderRadius:`30px 2px`,}}>At the  
                        <b> Institute of Information Technology Skills</b>, our students come first. 
                        We are committed to providing a supportive and inclusive learning environment for all our students. 
                        We believe that <b> IT Skills Education</b> should be <b> Accessible</b> to everyone,
                         regardless of their background, and we strive to make our programs <b> Affordable</b> and <b> Accessible</b> to all.</h6></div>
                         <Button variant='outline-light'>Read More</Button>
                    </Col>
                </Row>
            </Container>
        </Container>
  )
}

export default Newslet
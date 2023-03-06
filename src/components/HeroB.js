import * as React from 'react'
import { Link } from 'gatsby'
import {Col, Container, Row, Carousel} from "react-bootstrap"
const HeroB = () => {
  return (
    <>
    <Container className="my-5 py-5 px-lg-5">
        <Carousel>
            <Carousel.Item interval={1000}>
            <Row className="g-5 py-5 justify-content-center">
            <Col lg={8} className="text-center text-lg-start">
                <h1 className="text-white mb-4 animated zoomIn">Certified WordPress Themes & Plugins Developer Course</h1>
                <p className="text-white pb-3 animated zoomIn">This course is designed to provide students with a comprehensive understanding of 
                WordPress Themes & Plugins Development. Students will learn the fundamental concepts, tools, and techniques required to create 
                your own custom WordPress Themes & Plugins from scratch. By the end of the course, 
                students will have developed the skills and knowledge necessary to create custom WordPress Themes & Plugins for their websites.</p>
                <Link to="/courses/course-6" className="btn btn-light py-sm-3 px-sm-5 rounded-pill me-3 animated slideInLeft">Details</Link>
                <Link to="/contact" className="btn btn-outline-light py-sm-3 px-sm-5 rounded-pill animated slideInRight">Enroll</Link>
            </Col>
        </Row>
            </Carousel.Item>
            <Carousel.Item interval={1000}>
            <Row className="g-5 py-5 justify-content-center">
            <Col lg={8} className="text-center text-lg-start">
                <h1 className="text-white mb-4 animated zoomIn">Certified PHP & LARAVEL Web Developer Course</h1>
                <p className="text-white pb-3 animated zoomIn">This course is designed to provide students with a comprehensive understanding of 
                PHP and Laravel Web Development. Students will learn the fundamental concepts, tools, and techniques required to create dynamic 
                and scalable web applications using PHP and the Laravel framework. By the end of the course, students will have developed the 
                skills and knowledge necessary to create custom web applications using PHP and Laravel.</p>
                <Link to="/courses/course-2" className="btn btn-light py-sm-3 px-sm-5 rounded-pill me-3 animated slideInLeft">Details</Link>
                <Link to="/contact" className="btn btn-outline-light py-sm-3 px-sm-5 rounded-pill animated slideInRight">Enroll</Link>
            </Col>
        </Row>
            </Carousel.Item>
            <Carousel.Item interval={1000}>
            <Row className="g-5 py-5 justify-content-center">
            <Col lg={8} className="text-center text-lg-start">
                <h1 className="text-white mb-4 animated zoomIn">Certified Full-Stack Web Developer Course</h1>
                <p className="text-white pb-3 animated zoomIn">This course is designed to provide students with a comprehensive understanding of 
                Full Stack Web Development. Students will learn the fundamental concepts, tools, and techniques required to create dynamic and 
                responsive web applications using modern web technologies. By the end of the course, students will have developed the skills and 
                knowledge necessary to create custom web applications and E-commerce Store from the front-end to the back-end.</p>
                <Link to="/courses/course-1" className="btn btn-light py-sm-3 px-sm-5 rounded-pill me-3 animated slideInLeft">Details</Link>
                <Link to="/contact" className="btn btn-outline-light py-sm-3 px-sm-5 rounded-pill animated slideInRight">Enroll</Link>
            </Col>
        </Row>
            </Carousel.Item>
        </Carousel>
                
    </Container>
    </>
  )
}

export default HeroB
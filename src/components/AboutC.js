import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import * as React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebookF, faInstagram, faLinkedinIn, } from '@fortawesome/free-brands-svg-icons'
import {faCheck} from '@fortawesome/free-solid-svg-icons'

const AboutC = () => {
  return (
    <Container fluid className="py-5">
            <Container className="px-lg-5">
                <Row className="g-5">
                    <Col lg={6} className="wow fadeInUp" data-wow-delay="0.1s">
                        <div className="section-title position-relative mb-4 pb-2">
                            <h6 className="position-relative text-primary ps-4 ">About Us</h6>
                            <h2 className="mt-2">Welcome to the Institute of Information Technology Skills!</h2>
                        </div>
                        <p className="mb-4 ">We are a premier institution dedicated to providing world-class Education and training in the field of Information
                         Technology. Our goal is to equip our students with the skills, knowledge, and tools they need to succeed in the ever-evolving 
                         landscape of the IT industry.</p>
                        <Row className="g-3">
                            <Col sm={6}>
                                <h6 className="mb-3 "><span className='btn btn-outline-primary'><FontAwesomeIcon icon={faCheck} className="text-primary me-2"/>Professional Staff</span></h6>
                                <h6 className="mb-0 "><span className='btn btn-outline-primary'><FontAwesomeIcon icon={faCheck} className="text-primary me-2"/>Up To Date</span></h6>
                            </Col>
                            <Col sm={6}>
                                <h6 className="mb-3"><span className='btn btn-outline-primary'><FontAwesomeIcon icon={faCheck} className="text-primary me-2"/>Latest Technology</span></h6>
                                <h6 className="mb-0"><span className='btn btn-outline-primary'><FontAwesomeIcon icon={faCheck} className="text-primary me-2"/>Fair Prices</span></h6>
                            </Col>
                        </Row>
                        <div className="d-flex align-items-center mt-4">
                            <Link className="btn btn-primary rounded-pill px-4 me-3" to="/about">Much More</Link>
                            <Link className="btn btn-outline-primary btn-square me-3" to="/"><FontAwesomeIcon icon={faTwitter}/></Link>
                            <Link className="btn btn-outline-primary btn-square me-3" to="/"><FontAwesomeIcon icon={faFacebookF}/></Link>
                            <Link className="btn btn-outline-primary btn-square me-3" to="/"><FontAwesomeIcon icon={faInstagram}/></Link>
                            <Link className="btn btn-outline-primary btn-square" to="/"><FontAwesomeIcon icon={faLinkedinIn}/></Link>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <StaticImage className="img-fluid wow zoomIn" data-wow-delay="0.5s" src="../images/img/side-1.jpg" alt='about IT'/>
                    </Col>
                </Row>
            </Container>
        </Container>
  )
}

export default AboutC
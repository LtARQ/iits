import { Link } from 'gatsby'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLayerGroup} from '@fortawesome/free-solid-svg-icons'
import {faPython, faReact, faNode, faLaravel, faWordpress} from '@fortawesome/free-brands-svg-icons'

const Services = () => {
  return (
    <Container fluid className="py-5">
            <Container className="px-lg-5">
                <div className="section-title position-relative text-center mb-5 pb-2 wow fadeInUp" data-wow-delay="0.1s">
                    <h6 className="position-relative d-inline text-primary ps-4">Our Services</h6>
                    <h2 className="mt-2">We Provided With Technology</h2>
                </div>
                <Row className="g-4">
                    <Col md={6} lg={4} className="wow zoomIn" data-wow-delay="0.1s">
                        <div className="service-item d-flex flex-column justify-content-center text-center rounded">
                            <div className="service-icon flex-shrink-0">
                            <FontAwesomeIcon icon={faPython} style={{fontSize:`3rem`,color:`var(--primary)`}}/>
                            </div>
                            <h5 className="mb-3 color-p">Python & Django</h5>
                            <p style={{textAlign: `center`}}>Python is a high-level programming language known for its simplicity, readability, and  
                                widely used in web development, data analysis, scientific computing, 
                                artificial intelligence.</p>
                            <Link className="btn px-3 mt-auto mx-auto" to="technology/python">Read More</Link>
                        </div>
                    </Col>
                    <Col md={6} lg={4} className="wow zoomIn" data-wow-delay="0.3s">
                        <div className="service-item d-flex flex-column justify-content-center text-center rounded">
                            <div className="service-icon flex-shrink-0">
                            <FontAwesomeIcon icon={faReact} style={{fontSize:`3rem`,color:`var(--primary)`}}/>
                            </div>
                            <h5 className="mb-3 color-p">React JS</h5>
                            <p>React is a powerful and flexible technology that enables developers to create high-performance, scalable, and reusable web applications.</p>
                            <Link className="btn px-3 mt-auto mx-auto" to="technology/reactjs">Read More</Link>
                        </div>
                    </Col>
                    <Col md={6} lg={4} className="wow zoomIn" data-wow-delay="0.6s">
                        <div className="service-item d-flex flex-column justify-content-center text-center rounded">
                            <div className="service-icon flex-shrink-0">
                            <FontAwesomeIcon icon={faNode} style={{fontSize:`3rem`,color:`var(--primary)`}}/>
                            </div>
                            <h5 className="mb-3 color-p">Node JS</h5>
                            <p>Node.js is a powerful and flexible technology that allows developers to build high-performance and scalable server-side applications using JavaScript.</p>
                            <Link className="btn px-3 mt-auto mx-auto" to="technology/nodejs">Read More</Link>
                        </div>
                    </Col>
                    <Col md={6} lg={4} className="wow zoomIn" data-wow-delay="0.1s">
                        <div className="service-item d-flex flex-column justify-content-center text-center rounded">
                            <div className="service-icon flex-shrink-0">
                            <FontAwesomeIcon icon={faLaravel} style={{fontSize:`3rem`,color:`var(--primary)`}}/>
                            </div>
                            <h5 className="mb-3 color-p">PHP & Laravel</h5>
                            <p>PHP is a widely-used technology for building web applications that provides an easy-to-learn and flexible programming language.</p>
                            <Link className="btn px-3 mt-auto mx-auto" to="technology/phplaravel">Read More</Link>
                        </div>
                    </Col>
                    <Col md={6} lg={4} className="wow zoomIn" data-wow-delay="0.3s">
                        <div className="service-item d-flex flex-column justify-content-center text-center rounded">
                            <div className="service-icon flex-shrink-0">
                            <FontAwesomeIcon icon={faWordpress} style={{fontSize:`3rem`,color:`var(--primary)`}}/>
                            </div>
                            <h5 className="mb-3 color-p">WordPress</h5>
                            <p>WordPress is a free and open-source content management system (CMS) that is used to build and manage websites and blogs.</p>
                            <Link className="btn px-3 mt-auto mx-auto" to="technology/wordpress">Read More</Link>
                        </div>
                    </Col>
                    <Col md={6} lg={4} className="wow zoomIn" data-wow-delay="0.6s">
                        <div className="service-item d-flex flex-column justify-content-center text-center rounded">
                            <div className="service-icon flex-shrink-0">
                            <FontAwesomeIcon icon={faLayerGroup} style={{fontSize:`3rem`,color:`var(--primary)`}}/>
                            </div>
                            <h5 className="mb-3 color-p">Flutter</h5>
                            <p>Flutter is an open-source mobile application development framework created by Google uses the Dart programming language</p>
                            <Link className="btn px-3 mt-auto mx-auto" to="technology/flutter">Read More</Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>
  )
}

export default Services
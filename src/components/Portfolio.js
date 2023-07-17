import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlus, faFolder} from '@fortawesome/free-solid-svg-icons'

const Portfolio = () => {
  return (
    <Container fluid className="py-5">
            <Container className="px-lg-5">
                <div className="section-title position-relative text-center mb-5 pb-2 wow fadeInUp" data-wow-delay="0.1s">
                    <h6 className="position-relative d-inline text-primary ps-4">Our Courses</h6>
                    <h2 className="mt-2">Recently Launched Courses</h2>
                </div>
                <Row className="mt-n2 wow fadeInUp" data-wow-delay="0.1s">
                    <Col className="text-center">
                        <ul className="list-inline mb-5" id="portfolio-flters">
                            <li className="btn px-3 pe-4 active" >All</li>
                            <li className="btn px-3 pe-4" >Design</li>
                            <li className="btn px-3 pe-4" >Development</li>
                        </ul>
                    </Col>
                </Row>
                <Row className="g-4 portfolio-container">
                    <Col md={6} lg={4} className="portfolio-item first wow zoomIn" data-wow-delay="0.1s">
                        <div className="position-relative rounded overflow-hidden">
                            <StaticImage className="img-fluid w-100" src="../images/course/fullstack-banner.png" alt="full stack"/>
                            <div className="portfolio-overlay">
                                <Link className="btn btn-light" to="/courses/course-1" data-lightbox="portfolio"><FontAwesomeIcon icon={faPlus} className="fa-2x text-primary"/></Link>
                                <div className="my-auto">
                                    <small className="text-white"><FontAwesomeIcon icon={faFolder} className="me-2"/>Certified</small>
                                    <Link className="h5 d-block text-white mt-1 mb-0" to='/courses/course-1'>Front-End Web Development Course</Link>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col md={6} lg={4} className="portfolio-item second wow zoomIn" data-wow-delay="0.3s">
                        <div className="position-relative rounded overflow-hidden">
                            <StaticImage className="img-fluid w-100" src="../images/course/php-banner.png" alt="php"/>
                            <div className="portfolio-overlay">
                                <Link className="btn btn-light" to="/courses/course-2" data-lightbox="portfolio"><FontAwesomeIcon icon={faPlus} className="fa-2x text-primary"/></Link>
                                <div className="my-auto">
                                    <small className="text-white"><FontAwesomeIcon icon={faFolder} className="me-2"/>Certified</small>
                                    <Link className="h5 d-block text-white mt-1 mb-0" to="/courses/course-2">PHP & Laravel Web Development Course</Link>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col md={6} lg={4} className="portfolio-item first wow zoomIn" data-wow-delay="0.6s">
                        <div className="position-relative rounded overflow-hidden">
                            <StaticImage className="img-fluid w-100" src="../images/course/node-banner.png" alt="nodejs"/>
                            <div className="portfolio-overlay">
                                <Link className="btn btn-light" to="/courses/course-3" data-lightbox="portfolio"><FontAwesomeIcon icon={faPlus} className="fa-2x text-primary"/></Link>
                                <div className="my-auto">
                                    <small className="text-white"><FontAwesomeIcon icon={faFolder} className="me-2"/>Certified</small>
                                    <Link className="h5 d-block text-white mt-1 mb-0" to="/courses/course-3">MERN Stack Web Development Course</Link>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col md={6} lg={4} className="portfolio-item second wow zoomIn" data-wow-delay="0.1s">
                        <div className="position-relative rounded overflow-hidden">
                            <StaticImage className="img-fluid w-100" src="../images/course/python-banner.png" alt="python"/>
                            <div className="portfolio-overlay">
                                <Link className="btn btn-light" to="/courses/course-4" data-lightbox="portfolio"><FontAwesomeIcon icon={faPlus} className="fa-2x text-primary"/></Link>
                                <div className="my-auto">
                                    <small className="text-white"><FontAwesomeIcon icon={faFolder} className="me-2"/>Certified</small>
                                    <Link className="h5 d-block text-white mt-1 mb-0" to="/courses/course-4">Python & Django Web Development Course</Link>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col md={6} lg={4} className="portfolio-item first wow zoomIn" data-wow-delay="0.3s">
                        <div className="position-relative rounded overflow-hidden">
                            <StaticImage className="img-fluid w-100" src="../images/course/wordpress-banner.png" alt="wordpress"/>
                            <div className="portfolio-overlay">
                                <Link className="btn btn-light" to="/courses/course-5" data-lightbox="portfolio"><FontAwesomeIcon icon={faPlus} className="fa-2x text-primary"/></Link>
                                <div className="my-auto">
                                    <small className="text-white"><FontAwesomeIcon icon={faFolder} className="me-2"/>Certified</small>
                                    <Link className="h5 d-block text-white mt-1 mb-0" to="/courses/course-5">WordPress web Development Course</Link>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col md={6} lg={4} className="portfolio-item second wow zoomIn" data-wow-delay="0.6s">
                        <div className="position-relative rounded overflow-hidden">
                            <StaticImage className="img-fluid w-100" src="../images/course/wordpresstheme-banner.png" alt="wordpress"/>
                            <div className="portfolio-overlay">
                                <Link className="btn btn-light" to="/courses/course-6" data-lightbox="portfolio"><FontAwesomeIcon icon={faPlus} className="fa-2x text-primary"/></Link>
                                <div className="my-auto">
                                    <small className="text-white"><FontAwesomeIcon icon={faFolder} className="me-2"/>Certified</small>
                                    <Link className="h5 d-block text-white mt-1 mb-0" to="/courses/course-6">WordPress Themes & Plugins Development Course</Link>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col md={6} lg={4} className="portfolio-item first wow zoomIn" data-wow-delay="0.6s">
                        <div className="position-relative rounded overflow-hidden">
                            <StaticImage className="img-fluid w-100" src="../images/course/angular-banner.jpg" alt="Angular JS"/>
                            <div className="portfolio-overlay">
                                <Link className="btn btn-light" to="/courses/course-7" data-lightbox="portfolio"><FontAwesomeIcon icon={faPlus} className="fa-2x text-primary"/></Link>
                                <div className="my-auto">
                                    <small className="text-white"><FontAwesomeIcon icon={faFolder} className="me-2"/>Certified</small>
                                    <Link className="h5 d-block text-white mt-1 mb-0" to="/courses/course-7">Angular JS App Development Course</Link>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col md={6} lg={4} className="portfolio-item first wow zoomIn" data-wow-delay="0.6s">
                        <div className="position-relative rounded overflow-hidden">
                            <StaticImage className="img-fluid w-100" src="../images/course/communication-banner.jpg" alt="Communication Skills"/>
                            <div className="portfolio-overlay">
                                <Link className="btn btn-light" to="/courses/course-8" data-lightbox="portfolio"><FontAwesomeIcon icon={faPlus} className="fa-2x text-primary"/></Link>
                                <div className="my-auto">
                                    <small className="text-white"><FontAwesomeIcon icon={faFolder} className="me-2"/>Certified</small>
                                    <Link className="h5 d-block text-white mt-1 mb-0" to="/courses/course-8">Communication Skills Course</Link>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col md={6} lg={4} className="portfolio-item first wow zoomIn" data-wow-delay="0.6s">
                        <div className="position-relative rounded overflow-hidden">
                            <StaticImage className="img-fluid w-100" src="../images/course/digitalmarketing-banner.jpg" alt="Digital Marketing"/>
                            <div className="portfolio-overlay">
                                <Link className="btn btn-light" to="/courses/course-9" data-lightbox="portfolio"><FontAwesomeIcon icon={faPlus} className="fa-2x text-primary"/></Link>
                                <div className="my-auto">
                                    <small className="text-white"><FontAwesomeIcon icon={faFolder} className="me-2"/>Certified</small>
                                    <Link className="h5 d-block text-white mt-1 mb-0" to="/courses/course-9">Digital Marketing Course</Link>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col md={6} lg={4} className="portfolio-item first wow zoomIn" data-wow-delay="0.6s">
                        <div className="position-relative rounded overflow-hidden">
                            <StaticImage className="img-fluid w-100" src="../images/course/graphic-banner.jpg" alt="Graphic Designing"/>
                            <div className="portfolio-overlay">
                                <Link className="btn btn-light" to="/courses/course-10" data-lightbox="portfolio"><FontAwesomeIcon icon={faPlus} className="fa-2x text-primary"/></Link>
                                <div className="my-auto">
                                    <small className="text-white"><FontAwesomeIcon icon={faFolder} className="me-2"/>Certified</small>
                                    <Link className="h5 d-block text-white mt-1 mb-0" to="/courses/course-10">Graphic Designing Course</Link>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col md={6} lg={4} className="portfolio-item first wow zoomIn" data-wow-delay="0.6s">
                        <div className="position-relative rounded overflow-hidden">
                            <StaticImage className="img-fluid w-100" src="../images/course/flutter-banner.jpg" alt="Flutter"/>
                            <div className="portfolio-overlay">
                                <Link className="btn btn-light" to="/courses/course-11" data-lightbox="portfolio"><FontAwesomeIcon icon={faPlus} className="fa-2x text-primary"/></Link>
                                <div className="my-auto">
                                    <small className="text-white"><FontAwesomeIcon icon={faFolder} className="me-2"/>Certified</small>
                                    <Link className="h5 d-block text-white mt-1 mb-0" to="/courses/course-11">Flutter Mobile App Development Course</Link>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col md={6} lg={4} className="portfolio-item first wow zoomIn" data-wow-delay="0.6s">
                        <div className="position-relative rounded overflow-hidden">
                            <StaticImage className="img-fluid w-100" src="../images/course/fullstack2-banner.jpg" alt="Full Stack"/>
                            <div className="portfolio-overlay">
                                <Link className="btn btn-light" to="/courses/course-12" data-lightbox="portfolio"><FontAwesomeIcon icon={faPlus} className="fa-2x text-primary"/></Link>
                                <div className="my-auto">
                                    <small className="text-white"><FontAwesomeIcon icon={faFolder} className="me-2"/>Certified</small>
                                    <Link className="h5 d-block text-white mt-1 mb-0" to="/courses/course-12">Full Stack Web Development Course</Link>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>
  )
}

export default Portfolio
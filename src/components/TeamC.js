import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import * as React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebookF, faInstagram, faLinkedinIn, } from '@fortawesome/free-brands-svg-icons'

const TeamC = () => {
  return (
    <Container fluid className="py-5">
            <Container className="px-lg-5">
                <div className="section-title position-relative text-center mb-5 pb-2 wow fadeInUp" data-wow-delay="0.1s">
                    <h6 className="position-relative d-inline text-primary ps-4">Our Team</h6>
                    <h2 className="mt-2">Meet Our Team Members</h2>
                </div>
                <Row className="g-4">
                    <Col md={6} lg={4} className="wow fadeInUp" data-wow-delay="0.1s">
                        <div className="team-item">
                            <div className="d-flex">
                            <div className="flex-shrink-0 d-flex flex-column align-items-center mt-4 pt-5" style={{width: `75px`}}>
                                    <Link className="btn btn-square text-primary bg-white my-1" to="/"><FontAwesomeIcon icon={faFacebookF}/></Link>
                                    <Link className="btn btn-square text-primary bg-white my-1" to="/"><FontAwesomeIcon icon={faTwitter}/></Link>
                                    <Link className="btn btn-square text-primary bg-white my-1" to="/"><FontAwesomeIcon icon={faInstagram}/></Link>
                                    <Link className="btn btn-square text-primary bg-white my-1" to="/"><FontAwesomeIcon icon={faLinkedinIn}/></Link>
                                </div>
                                <StaticImage className="img-fluid rounded w-100" src="../images/waqar.jpg" alt="img"/>
                            </div>
                            <div className="px-4 py-3">
                                <h5 className="fw-bold m-0 ">Waqar Anjum</h5>
                                <small>HOD</small>
                            </div>
                        </div>
                    </Col>
                    <Col md={6} lg={4} className="wow fadeInUp" data-wow-delay="0.3s">
                        <div className="team-item">
                            <div className="d-flex">
                            <div className="flex-shrink-0 d-flex flex-column align-items-center mt-4 pt-5" style={{width: `75px`}}>
                                    <Link className="btn btn-square text-primary bg-white my-1" to="/"><FontAwesomeIcon icon={faFacebookF}/></Link>
                                    <Link className="btn btn-square text-primary bg-white my-1" to="/"><FontAwesomeIcon icon={faTwitter}/></Link>
                                    <Link className="btn btn-square text-primary bg-white my-1" to="/"><FontAwesomeIcon icon={faInstagram}/></Link>
                                    <Link className="btn btn-square text-primary bg-white my-1" to="/"><FontAwesomeIcon icon={faLinkedinIn}/></Link>
                                </div>
                                <StaticImage className="img-fluid rounded w-100" src="../images/shery.jpg" alt="img"/>
                            </div>
                            <div className="px-4 py-3">
                                <h5 className="fw-bold m-0">Shahryar Ahmed</h5>
                                <small>CTO</small>
                            </div>
                        </div>
                    </Col>
                    <Col md={6} lg={4} className="wow fadeInUp" data-wow-delay="0.6s">
                        <div className="team-item">
                            <div className="d-flex">
                                <div className="flex-shrink-0 d-flex flex-column align-items-center mt-4 pt-5" style={{width: `75px`}}>
                                    <Link className="btn btn-square text-primary bg-white my-1" to="/"><FontAwesomeIcon icon={faFacebookF}/></Link>
                                    <Link className="btn btn-square text-primary bg-white my-1" to="/"><FontAwesomeIcon icon={faTwitter}/></Link>
                                    <Link className="btn btn-square text-primary bg-white my-1" to="/"><FontAwesomeIcon icon={faInstagram}/></Link>
                                    <Link className="btn btn-square text-primary bg-white my-1" to="/"><FontAwesomeIcon icon={faLinkedinIn}/></Link>
                                </div>
                                <StaticImage className="img-fluid rounded w-100" src="../images/arq2.jpg" alt="img"/>
                            </div>
                            <div className="px-4 py-3">
                                <h5 className="fw-bold m-0">Abdul Raouf</h5>
                                <small>DIRECTOR</small>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>
  )
}

export default TeamC
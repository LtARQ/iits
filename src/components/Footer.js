import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import * as React from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebookF, faYoutube, faInstagram, faLinkedinIn, } from '@fortawesome/free-brands-svg-icons'
import {faArrowUp, faPaperPlane, faEnvelope, faMapMarkerAlt, faPhoneAlt} from '@fortawesome/free-solid-svg-icons'
 
const Footer = () => {
  return (
    <>
    <Container fluid className="bg-primary text-light footer mt-5 pt-5 wow fadeIn" data-wow-delay="0.1s">
        <Container className="py-5 px-lg-5">
            <Row className="row g-5">
                <Col md={6} lg={3}>
                    <h5 className="text-white mb-4">Get In Touch</h5>
                    <p><FontAwesomeIcon icon={faMapMarkerAlt} className="me-3"/>Johar Town, Lahore, Pakistan</p>
                    <p><FontAwesomeIcon icon={ faPhoneAlt } className='me-3'/>+92 312 7489765</p>
                    <p><FontAwesomeIcon icon={ faEnvelope } className="me-3"/>iitslearning@gmail.com</p>
                    <div className="d-flex pt-2">
                        <Link className="btn btn-outline-light btn-social" to="/"><FontAwesomeIcon icon={faTwitter}/></Link>
                        <Link className="btn btn-outline-light btn-social" to="/"><FontAwesomeIcon icon={faFacebookF}/></Link>
                        <Link className="btn btn-outline-light btn-social" to="/"><FontAwesomeIcon icon={faYoutube}/></Link>
                        <Link className="btn btn-outline-light btn-social" to="/"><FontAwesomeIcon icon={faInstagram}/></Link>
                        <Link className="btn btn-outline-light btn-social" to="/"><FontAwesomeIcon icon={faLinkedinIn}/></Link>
                    </div>
                </Col>
                <Col md={6} lg={3}>
                    <h5 className="text-white mb-4">Popular Link</h5>
                    <Link className='btn btn-link' to='/'>Home</Link>
                    <Link className='btn btn-link' to='/courses'>Courses</Link>
                    <Link className='btn btn-link' to='/schedule'>Schedule</Link>
                    <Link className='btn btn-link' to='/about'>About Us</Link>
                    <Link className='btn btn-link' to='/vision'>Vision</Link>
                </Col>
                <Col md={6} lg={3}>
                    <h5 className="text-white mb-4">Project Gallery</h5>
                    <Row sm={3} md={3} lg={3} className="g-2 d-flex flex-nowrap mb-1">
                        <Col className="bg-white d-flex align-items-center me-1">
                            <Link to='/technology/wordpress'><StaticImage className=" " src="../images/wordpress.png" alt="wordpress"/></Link>
                        </Col>
                        <Col className="bg-white d-flex align-items-center  me-1">
                        <Link to='/technology/phplaravel'><StaticImage className="img-fluid" src="../images/laravel.png" alt="laravel"/></Link>
                        </Col>
                        <Col className="bg-white d-flex align-items-center">
                        <Link to='/technology/python'><StaticImage className="img-fluid" src="../images/python.png" alt="python"/></Link>
                        </Col>
                    </Row>
                    <Row sm={3} md={3} lg={3} className="g-2 d-flex flex-nowrap" >
                        <Col className="bg-white d-flex align-items-center me-1">
                        <Link to='/technology/reactjs'><StaticImage className="" src="../images/reactjs.png" alt="react"/></Link>
                        </Col>
                        <Col className="bg-white d-flex align-items-center me-1">
                        <Link to='/technology/nodejs'><StaticImage className="img-fluid" src="../images/nodejs.png" alt="node"/></Link>
                        </Col>
                        <Col className="bg-white d-flex align-items-center ">
                        <Link to='/technology/flutter'><StaticImage className="img-fluid" src="../images/flutter.png" alt="flutter"/></Link>
                        </Col>
                    </Row>
                </Col>
                <Col md={6} lg={3}>
                    <h5 className="text-white mb-4">Newsletter</h5>
                    <p>If you're interested in pursuing a career in information technology, we invite you to join us at the Institute of Information Technology Skills.</p>
                    <div className="position-relative w-100 mt-5">
                        
                        <Form.Control className="border-0 rounded-pill w-100 ps-4 pe-5 py-3" type="text" name='email' placeholder="Your Email" style={{maxHeight: `48px`}}/>
                        <Link to='/' style={{position:`absolute`,top:`10%`,right:`4%`}} className="shadow-none mt-1 me-2 fs-4"><FontAwesomeIcon icon={faPaperPlane}/></Link>
                    </div>
                </Col>
            </Row>
        </Container>
        <Container className="px-lg-5">
            <div className="copyright">
                <Row>
                    <Col md={6} className="text-center text-md-start mb-3 mb-md-0">
                        &copy; <Link className="border-bottom" to="/">IITS</Link>, All Right Reserved. 

                        Powered By <Link className="border-bottom" to="/">IITS</Link>
                    </Col>
                    <Col md={6} className="text-center text-md-end">
                        <div className="footer-menu">
                            <Link to="/">Home</Link>
                            <Link to="/">Cookies</Link>
                            <Link to="/">Help</Link>
                            <Link to="/">FQAs</Link>
                        </div>
                    </Col>
                </Row>
            </div>
        </Container>
    </Container>
    <Link to='#' className="btn btn-lg btn-primary btn-lg-square back-to-top pt-2"><FontAwesomeIcon icon={faArrowUp}/></Link>
    </>
  )
}

export default Footer
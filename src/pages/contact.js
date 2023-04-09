import * as React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import Layout from '../components/layout'
import Seo from '../components/seo'

const contact = () => {
  return (
    <>
    <Layout ptitle="Contact Us">
    <Container fluid className="py-5">
            <Container className="px-lg-5">
                <Row className="justify-content-center">
                    <Col lg={7}>
                        <div className="section-title position-relative text-center mb-5 pb-2 wow fadeInUp" data-wow-delay="0.1s">
                            <h6 className="position-relative d-inline text-primary ps-4">Contact Us</h6>
                            <h2 className="mt-2">Contact For Any Query</h2>
                        </div>
                        <div className="wow fadeInUp" data-wow-delay="0.3s">
                            <Form>
                                <Row className="g-3">
                                    <Col md={6}>
                                        <div className="form-floating">
                                            <Form.Control type="text" id="name" placeholder="Your Name"/>
                                            <Form.Label for="name">Your Name</Form.Label>
                                        </div>
                                    </Col>
                                    <Col md={6}>
                                        <div className="form-floating">
                                            <Form.Control type="email" id="email" placeholder="Your Email"/>
                                            <Form.Label for="email">Your Email</Form.Label>
                                        </div>
                                    </Col>
                                    <Col sm={12} md={12} lg={12}>
                                        <div className="form-floating">
                                            <Form.Control type="text" id="subject" placeholder="Subject"/>
                                            <Form.Label for="subject">Subject</Form.Label>
                                        </div>
                                    </Col>
                                    <Col sm={12} md={12} lg={12}>
                                        <div className="form-floating">
                                            <Form.Control type='textarea' className="form-control" placeholder="Leave a message here" id="message" style={{height: `150px`}}></Form.Control>
                                            <Form.Label for="message">Message</Form.Label>
                                        </div>
                                    </Col>
                                    <Col sm={12} md={12} lg={12}>
                                        <Button type='reset' className="btn btn-primary w-100 py-3">Send Message</Button>
                                    </Col>
                                </Row>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>
    </Layout>
     
    </>
  )
}
export const Head = () => <Seo title="Contact" />
export default contact
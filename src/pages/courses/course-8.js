import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import { Link } from 'gatsby'

const CommunicationSkills = () => {
  return (
    <Layout ptitle="Communication Skills">
        <Container>
        <Row className='justify-content-center'>
                <Col sm={12} md={10} lg={10} className='d-flex justify-content-center'>
                    <StaticImage src='../../images/course/communication-banner.jpg' alt='Communication Skills'/>
                </Col>
            </Row>
            <Row className='justify-content-center mt-5'>
                <Col sm={12} md={10} lg={8}>
                    <div>
                        <h1>Communication skills Course</h1>
                    </div>
                    <div>
                        <p>This course will teach you how to improve your communication skills through using body language. 
                            You will learn the most important aspects of body language, which include gesture, posture and 
                            expression, and the ways in which they can be improved.</p>
                        <h2>Brief Contents :</h2>
                        <ul>
                            <li><b>The Fundamentals of Communication</b></li>
                            <ul>
                                <li>The Fundamentals of Communication - Learning Outcomes</li>
                                <li>The Importance of Communication</li>
                                <li>The Basics of Communication</li>
                                <li>Communication Technique</li>
                            </ul>                            
                                <li><b>How to Listen and Communicate Effectively</b></li>
                            <ul>
                                <li>How to Listen and Communicate Effectively - Learning Outcomes</li>
                                <li>3 Cs of Communication</li>
                                <li>Communicate Effectively</li>
                                <li>Effective Listening</li>
                            </ul>
                                <li><b>How to Improve your Body Language & Communication</b></li>
                            <ul>
                                <li>How to Improve your Body Language & Communication - Learning Outcomes</li>
                                <li>Body Language Basics</li>
                                <li>Improve your Body Language</li>
                                <li>Practical Tips to Communicate</li>
                            </ul>
                        </ul>
                        <h2>Training Methodology</h2>
                        <ul>
                            <li>Lectures & Demos by industry experts</li>
                            <li>Project Driven Hands-On approach</li>
                            <li>Projects, assignments & quizzes for student’s evaluation</li>
                        </ul>
                        <h2>Audience</h2>
                        <ul>
                            <li>Everyone Can join This Course.</li>
                        </ul>
                        <h2>Duration & Frequency</h2>
                        <p>3 Months (12 weeks) with 3 training sessions of 1.5 hours a week.</p>
                    </div>
                </Col>
                <Col sm={12} md={10} lg={8} className='d-flex justify-content-center'>
                <Link to='/schedule'><Button variant='outline-primary' className='p-3 my-4'>Course New Batch schedule</Button></Link>
            </Col>
            </Row>
        </Container>
    </Layout>
  )
}
export const Head = () => <Seo title="Course" />
export default CommunicationSkills
import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import { Link } from 'gatsby'

const DigitalMarketing = () => {
  return (
    <Layout ptitle="Digital Marketing">
        <Container>
        <Row className='justify-content-center'>
                <Col sm={12} md={10} lg={10} className='d-flex justify-content-center'>
                    <StaticImage src='../../images/course/digitalmarketing-banner.jpg' alt='Digital Marketing'/>
                </Col>
            </Row>
            <Row className='justify-content-center mt-5'>
                <Col sm={12} md={10} lg={8}>
                    <div>
                        <h1>Certified Digital Marketing Course</h1>
                    </div>
                    <div>
                        <p>This course is complete digital marketing course, designed to teach you everything you need to become a digital marketing expert.
                            It will help you to grow your business with social media marketing, content marketing, email marketing, and more.
                        </p>
                        <h2>Brief Contents :</h2>
                        <ul>
                            <li>Introduction</li>
                            <li>Market Research</li>
                            <li>Website Building</li>
                            <li>Search Engine Optimization (SEO)</li>
                            <li>Email Marketing</li>
                            <li>Google Analytics</li>
                            <li>Prompt Engineering with ChatGPT</li>
                            <li>Branding</li>
                            <li>Content Marketing</li>
                            <li>Sales Psychology</li>
                            <li>Coopywriting</li>
                            <li>Channels</li>
                            <li>Google Ads</li>
                            <li>YouTube Ads</li>
                            <li>Facebook Ads</li>
                            <li>Facebook Marketing</li>
                            <li>Instagram Marketing</li>
                            <li>Youtube Marketing</li>
                            <li>Pinterest Marketing</li>
                            <li>LinkedIn Marketing</li>
                            <li>Quora Marketing</li>
                            <li>Twitter Marketing</li>
                            <li>Content Marketing Machine</li>
                            <li>Freelance</li>
                        </ul>
                        <h2>Training Methodology</h2>
                        <ul>
                            <li>Lectures & Demos by industry experts</li>
                            <li>Project Driven Hands-On approach</li>
                            <li>Focus on latest tools, technologies & industry practices</li>
                            <li>Projects, assignments & quizzes for student’s evaluation</li>
                        </ul>
                        <h2>Audience</h2>
                        <ul>
                            <li>Anyone can join this course</li>
                            <li>No Knowledge require for joining</li>
                        </ul>
                        <h2>Duration & Frequency</h2>
                        <p>6 Months (24 weeks) with 3 training sessions of 1.5 hours a week.</p>
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
export default DigitalMarketing
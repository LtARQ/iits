import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import { Link } from 'gatsby'

const Angular = () => {
  return (
    <Layout ptitle="AngularJS">
        <Container>
        <Row className='justify-content-center'>
                <Col sm={12} md={10} lg={10} className='d-flex justify-content-center'>
                    <StaticImage src='../../images/course/angular-banner.jpg' alt='AngularJS'/>
                </Col>
            </Row>
            <Row className='justify-content-center mt-5'>
                <Col sm={12} md={10} lg={8}>
                    <div>
                        <h1>Certified Angular JS App Development Course</h1>
                    </div>
                    <div>
                        <p>This course is designed to provide students with a comprehensive understanding of Angular Apps 
                            Development. Students will learn the fundamental concepts, tools, and techniques required to create Angular 
                            App.Taking this course will enable you to be amongst the first to gain a very solid understanding of Angular</p>
                        <h2>Brief Contents :</h2>
                        <ul>
                            <li>Introduction to Angular</li>
                            <li>Angular Basics</li>
                            <li>Planning the App</li>
                            <li>Debugging</li>
                            <li>Components</li>
                            <li>Databinding Deep Dive</li>
                            <li>Directives Deep Dive</li>
                            <li>Using Services</li>
                            <li>Dependency Injection</li>
                            <li>Changing Pages with Routing</li>
                            <li>Understanding Observables</li>
                            <li>Handling Forms in Angular App</li>
                            <li>Using Pipes to Transform Output</li>
                            <li>Making Http Requests</li>
                            <li>Authentucation</li>
                            <li>Route Protuction</li>
                            <li>Dynamic Components</li>
                            <li>Angular Modules</li>
                            <li>Optimizing Angular App</li>
                            <li>Standalone Components</li>
                            <li>Angular Signals</li>
                            <li>NgRx for State Management</li>
                            <li>Angular Universal</li>
                            <li>Angular Animation</li>
                            <li>Unit Testing in Angular Apps</li>
                            <li>Angular Changes & New Features</li>
                            <li>Deploying Angular App</li>
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
                            <li>Experienced frontend developers interested in learning a modern JavaScript framework</li>
                            <li>This course is for everyone interested in learning a state-of-the-art frontend JavaScript framework</li>
                            <li>NO Angular 1 or Angular 2+ knowledge is required!</li>
                            <li>Basic JavaScript knowledge is required</li>
                        </ul>
                        <h2>Course Project</h2>
                        <p>Participants of the course will develop a commercial level Angular application with help of their trainers
                            using TypeScrips. It includes developing and consuming REST Services
                            and database programming.
                        </p>
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
export default Angular
import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Layout from '../../components/layout'
import Seo from '../../components/seo'

const MernStack = () => {
  return (
    <Layout ptitle="MERN Stack">
        <Container>
        <Row className='justify-content-center'>
                <Col sm={12} md={10} lg={10} className='d-flex justify-content-center'>
                    <StaticImage src='../../images/course/node-banner.png' alt='Mern stack'/>
                </Col>
            </Row>
            <Row className='justify-content-center mt-5'>
                <Col sm={12} md={10} lg={8}>
                    <div>
                        <h1>Certified MERN Stack Web Development Course</h1>
                    </div>
                    <div>
                        <p>In this project-based course students will learn to develop web applications MERN Stack (MongoDB,
                            Express, ReactJS and NodeJS). It includes development of the server side (Back-End) of the
                            application using NodeJS, Express Framework and MongoDB in the form of REST APIs and the
                            Front-End of the web application using React, Redux & BootStrap by consuming REST APIs.</p>
                        <h2>Brief Contents :</h2>
                        <ul>
                            <li><b> MERN Essentials & JavaScript ES6</b></li>
                            <ul>
                                <li> Introduction to MERN Stack Web Development</li>
                                <li> Components of MERN (MongoDB, Express, Node JS & React JS)</li>
                                <li> Setting Development Environment for MERN Stack Web Development</li>
                                <li> Quick Review of JavaScript & JavaScript ES5 vs ES6</li>
                                <li> ES6 syntax, difference between var, let and const,</li>
                                <li> Control with block scoping, Template literals</li>
                                <li> Object destructuring, Spread and Rest Operators</li>
                                <li> Methods and Modules, Arrow Functions (Map, Reduce, Filter etc.)</li>
                                <li> OOP in JavaScript (Classes, Inheritance etc.)</li>
                                <li> Default and named import/export, Short-Hand property Syntax</li>
                                <li> Fetch/then, Async & Await Keywords</li>
                            </ul>
                            <li><b> React & Redux for Front End Web Development</b></li>
                            <ul>
                                <li> React Big Picture, History & Goals</li>
                                <li> Setting up your Development Environment: Node.js, NPM and Git</li>
                                <li> Introduction to React and JSX</li>
                                <li> Configuring your React Application</li>
                                <li> React Components</li>
                                <li> Composing Components</li>
                                <li> React Components: State and Props</li>
                                <li> React Components: Lifecycle Methods</li>
                                <li> React Component Types</li>
                                <li> Presentational and Container Components</li>
                                <li> Functional Components</li>
                                <li> React Router</li>
                                <li> Single Page Applications</li>
                                <li> React Router: Parameters</li>
                                <li> Controlled Forms</li>
                                <li> Controlled Forms Validation</li>
                                <li> Uncontrolled Components</li>
                                <li> Uncontrolled Forms</li>
                                <li> Introduction to Redux</li>
                                <li> React Redux Form</li>
                                <li> React Redux Form Validation</li>
                                <li> Redux Actions</li>
                                <li> Combining Reducers</li>
                                <li> Redux Thunk</li>
                                <li> React-Redux-Form Revisited</li>
                                <li> Client-Server Communication</li>
                                <li> Networking Essentials</li>
                                <li> Fetch & Promises, Error Handling</li>
                            </ul>
                            <li><b> Node JS, Express & MongoDB for Backend Development</b></li>
                            <ul>
                                <li> Intro to backend Development with NodeJS, Express and MongoDB</li>
                                <li> Node.js Big picture, History & Goals</li>
                                <li> Setting up Development Environment</li>
                                <li> Introduction to Node.js and NPM</li>
                                <li> Understanding Node Modules</li>
                                <li> Introduction to Express</li>
                                <li> Setting up Node Server</li>
                                <li> Cross-Origin Resource Sharing</li>
                                <li> Restful API (Sending Requests & Responses)</li>
                                <li> Express Router</li>
                                <li> Introduction to MongoDB</li>
                                <li> Node and MongoDB</li>
                                <li> Callback Hell and Promises</li>
                                <li> Mongoose ODM</li>
                                <li> REST API with Express, MongoDB and Mongoose</li>
                                <li> Basic Authentication</li>
                                <li> Express Sessions</li>
                                <li> User Authentication with Passport</li>
                                <li> Token Based Authentication</li>
                                <li> User Authentication with Passport and JSON Web Token</li>
                                <li> Custom Authentication Middleware</li>
                                <li> Deployment & Configuration of MERN Stack Web Application</li>
                            </ul>

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
                            <li> Students & Graduates of Computer Science & Information Technology</li>
                            <li> Students & Graduates of any other discipline looking for future in IT</li>
                            <li> Web Developer / Web Designer</li>
                            <li> Any other person interested in learning Web Development and fulfills the prerequisite of the course.</li>


                        </ul>
                        <h2>Course Project</h2>
                        <p>Participants of the course will develop a commercial level web application with help of their trainers
                            using PHP 8, MySql & Laravel Framework. It includes developing and consuming REST Services
                            and database programming using Eloquent (Laravel ORM Framework).
                        </p>
                        <h2>Duration & Frequency</h2>
                        <p>6 Months (24 weeks) with 3 training sessions of 1.5 hours a week.</p>
                    </div>
                </Col>
            </Row>
        </Container>
    </Layout>
  )
}
export const Head = () => <Seo title="Course" />
export default MernStack
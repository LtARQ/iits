import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Layout from '../../components/layout'
import Seo from '../../components/seo'

const PythonDjango = () => {
  return (
    <Layout ptitle="Python & Django">
        <Container>
        <Row className='justify-content-center'>
                <Col sm={12} md={10} lg={10} className='d-flex justify-content-center'>
                    <StaticImage src='../../images/course/python-banner.png' alt='Python and Django'/>
                </Col>
            </Row>
            <Row className='justify-content-center mt-5'>
                <Col sm={12} md={10} lg={8}>
                    <div>
                        <h1>Certified Python & Django Web Development Course</h1>
                    </div>
                    <div>
                        <p>This course is designed to provide students with a comprehensive understanding of Python and Django Web Development. 
                            Students will learn the fundamental concepts, tools, and techniques required to create dynamic and scalable web 
                            applications using Python and the Django framework. By the end of the course, students will have developed the 
                            skills and knowledge necessary to create custom web applications using Python and Django.</p>
                        <h2>Brief Contents :</h2>
                        <ul>
                            <li><b> Introduction to Python</b></li>
                            <ul>
                                <li> Understanding the basics of Python</li>
                                <li> Setting up a development environment</li>
                                <li> Variables, operators, and expressions</li>
                                <li> Control structures and loops</li>
                            </ul>
                            <li><b> Advanced Python Concepts</b></li>
                            <ul>
                                <li> Functions and modules</li>
                                <li>Object-oriented programming in Python</li>
                                <li>Handling errors and exceptions</li>
                                <li>Python security</li>
                            </ul>
                                <li><b> Introduction to Django</b></li>
                            <ul>
                                <li>Overview of Django</li>
                                <li> Installing and setting up Django</li>
                                <li> Django project structure</li>
                                <li> Understanding Django templates</li>
                            </ul>
                                <li><b> Django Models and Databases</b></li>
                            <ul>
                                <li> Working with databases in Django</li>
                                <li> Creating Django models</li>
                                <li> Querying and manipulating data using Django ORM</li>
                                <li> Creating database migrations</li>
                            </ul>
                                <li><b> Django Views and URLs</b></li>
                            <ul>
                                <li> Creating views in Django</li>
                                <li> Understanding Django URL patterns</li>
                                <li> Using middleware in Django</li>
                                <li> Creating CRUD operations in Django</li>
                            </ul>
                                <li><b> Django Forms and Templates</b></li>
                            <ul>
                                <li> Creating forms in Django</li>
                                <li> Building user interfaces with Django templates</li>
                                <li> Implementing authentication and authorization in Django</li>
                                <li> Advanced Django templates</li>
                            </ul>
                                <li><b> Django Rest Framework</b></li>
                            <ul>
                                <li> Creating RESTful APIs using Django Rest Framework</li>
                                <li> Serialization and deserialization of data</li>
                                <li> Working with viewsets and routers</li>
                                <li> Authentication and permissions in Django Rest Framework</li>
                            </ul>
                                <li><b> Advanced Django Concepts</b></li>
                            <ul>
                                <li> Implementing caching in Django</li>
                                <li> Using Django signals</li>
                                <li> Django and Celery for asynchronous tasks</li>
                                <li> Working with third-party packages</li>
                            </ul>
                                <li><b> Introduction to Front-end Frameworks</b></li>
                            <ul>
                                <li> Overview of front-end frameworks</li>
                                <li> Introduction to ReactJS</li>
                                <li> Building a basic ReactJS application</li>
                                <li> ReactJS components and props</li>
                                <li> Managing state in ReactJS</li>
                            </ul>
                                <li><b> Final Project</b></li>
                            <ul>
                                <li>Developing a full-stack web application using Python, Django, and React</li>
                                <li>Project planning and management</li>
                                <li>User experience and design considerations</li>
                                <li>Deploying the application</li>
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
                            <li>Students & Graduates of Computer Science looking for future in Web Development</li>
                            <li>Front End Web Developers interested in learning Back End Web Development</li>
                            <li>Web Developers interesting in Web Development using Python & Django Framework</li>
                            <li>Any person looking for future in Web Development using Python & Django Framework</li>
                        </ul>
                        <h2>Course Project</h2>
                        <p>Participants of the course will develop a commercial level web application with help of their trainers
                            using Python, Sqlite3 & Django Framework. It includes developing and consuming REST Services.
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
export default PythonDjango
import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Layout from '../../components/layout'
import Seo from '../../components/seo'

const FrontEnd = () => {
  return (
    <Layout ptitle="Front-End">
        <Container>
            <Row className='justify-content-center'>
                <Col sm={12} md={10} lg={10} className='d-flex justify-content-center'>
                    <StaticImage src='../../images/course/fullstack-banner.png' alt='Front End Web Development course'/>
                </Col>
            </Row>
            <Row className='justify-content-center mt-5'>
                <Col sm={12} md={10} lg={8}>
                    <div>
                        <h1>Certified Front-End Web Development Course</h1>
                    </div>
                    <div>
                        <p>In this project based course you will learn to develop interactive and responsive websites and
                        front-end web development of an enterprise application. It includes HTML5 and CSS3 for creating
                        beautiful web pages; JavaScript & jQuery for more interactive and rich Web UI; BootStrap for
                        developing responsive and elegant websites; AJAX & JSON for consuming REST Services. The
                        course also covers essentials of Angular for front-end web development.</p>
                        <h3>Brief Contents</h3>
                        <ul>
                            <li>Introduction to Web Development, HTML, HTML5 & IDEs</li>
                            <li>Basics of HTML5 & CSS3 and HTML5 Headings, Paragraphs & Images</li>
                            <li> HTML5 Text Formatting, Links, Entities and Inline vs Block Level Elements</li>
                            <li> HTML5 Lists: Unordered List, Ordered List and Description List</li>
                            <li> iframe to Display Web-Pages from other Websites on your Website</li>
                            <li> Detailed Overview of HTML5 and HTML5 Semantic Elements</li>
                            <li> Using Audios and Videos on Websites using HTML5 Elements</li>
                            <li> Creating Forms to Collect Data from Users using HTML5 & CSS3</li>
                            <li> Creating and Using CSS Styles: Inline CSS, Internal CSS & External CSS</li>
                            <li> Using CSS3 Styles with div, p, span etc. for Creating Beautiful Web Pages</li>
                            <li> CSS3 Box-Model: Padding, Margin, Outline, Border, Background</li>
                            <li> CSS3 Floating, Positioning, Overflow, Image-Opacity and Image-Sprites</li>
                            <li> CSS3 Media Queries in Detail & Creating fully Responsive Web Pages</li>
                            <li> Introduction to BootStrap 5 and BootStrap 5 Grid System in Detail</li>
                            <li> BootStrap 5 Typography, Tables, Images, Thumbnails and Buttons</li>
                            <li> BootStrap 5 for Creating Elegant Forms for Collecting User Data</li>
                            <li> BootStrap 5 Jumbotron, Tooltips, Popovers, Alerts, Spinners & Badges</li>
                            <li> BootStrap 5: Navs, Navbars, Menus, Tabs, Dropdown and Collapse</li>
                            <li> BootStrap 5 Pagination, Modals, Cards, Image Carousel and Scrollspy</li>
                            <li> JavaScript Statements, Expressions, Conditions and Loops</li>
                            <li> JavaScript Objects, Functions, Arrays and Events</li>
                            <li> Working with Numbers, Strings, and Dates in JavaScript</li>
                            <li> Testing and Debug a JavaScript Applications</li>
                            <li> Create object-oriented JavaScript applications</li>
                            <li> Using Regular Expressions, Handling Exceptions and Validating Data</li>
                            <li> Events, Images, and Timers, Closures, Callbacks and Recursion</li>
                            <li> JavaScript Object Notation (JSON) in JavaScript Applications</li>
                            <li> Selecting and Manipulating DOM Elements with jQuery</li>
                            <li> Using jQuery for Event Handling, Basic Animations and Effects</li>
                            <li> jQuery AJAX Calls ( load(), get(), post(), ajax(), getJSON(), getScript() )</li>
                            <li> Handling Responses of AJAX Call in Plain Text, HTML and JSON format</li>
                            <li> Consuming REST Services / REST API using AJAX and JSON</li>
                            <li> Essentials of Angular and React for Creating Modern Web Applications</li>
                            <li> Testing, Debugging & Publishing Website to a Commercial Server</li>
                        </ul>
                        <h3>Training Methodology</h3>
                        <ul>
                            <li>Lectures & Demos by industry experts</li>
                            <li>Project Driven Hands-On approach</li>
                            <li>Focus on latest tools, technologies & industry practices</li>
                            <li>Projects, assignments & quizzes for student’s evaluation</li>
                        </ul>
                        <h3>Audience</h3>
                        <ul>
                            <li>Students & Graduates of Computer Science & Information Technology</li>
                            <li>Students & Graduates of any other discipline looking for future in IT</li>
                            <li>Web Designers interested in learning Website Development</li>
                            <li>Any other person willing to learn Website Development</li>
                        </ul>
                        <h3>Course Project</h3>
                        <p>Participants of the course will develop a commercial level website using HTML5, CSS3, JavaScript, jQuery and BootStrap 5.
                        </p>
                        <h3>Duration & Frequency</h3>
                        <p>3 Months (12 weeks) with 3 training sessions of 1.5 hours a week.</p>
                    </div>
                </Col>
            </Row>
        </Container>
    </Layout>
  )
}
export const Head = () => <Seo title="Course" />
export default FrontEnd
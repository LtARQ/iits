import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import { Link } from 'gatsby'

const FullStack = () => {
  return (
    <Layout ptitle="Full Stack">
        <Container>
            <Row className='justify-content-center'>
                <Col sm={12} md={10} lg={10} className='d-flex justify-content-center'>
                    <StaticImage src='../../images/course/fullstack2-banner.jpg' alt='Full Stack Web Development course'/>
                </Col>
            </Row>
            <Row className='justify-content-center mt-5'>
                <Col sm={12} md={10} lg={8}>
                    <div>
                        <h1>Certified Full Stack Web Development Course</h1>
                    </div>
                    <div>
                        <p>This extensive project-based course is designed to cover Full-Stack web development from scratch. 
                            It includes HTML5, CSS3 & BootStrap 5 for creating responsive and elegant webpages; JavaScript & jQuery 
                            for rich and more interactive UI development for web applications; PHP & Laravel Framework for back-end 
                            web development. Database programming for web using Eloquent ORM & MySql. Developing REST Services/API 
                            using PHP & Laravel Framework; and Consuming REST Services using AJAX & JSON. The course also covers 
                            essentials of Angular & React for modern single page web application development.</p>
                        <h3>Brief Contents</h3>
                        <ul>
                            <li> Introduction to Web Development, HTML, HTML5 & IDEs</li>
                            <li> Basics of HTML5 & CSS3 and HTML5 Headings, Paragraphs & Images</li>
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
                            <li> Setting Development Environment for PHP using Xampp & Netbeans</li>
                            <li> Introduction to PHP 8, Basics PHP syntax & Conditional Statements</li>
                            <li> PHP Programming: Loops (for, While , Do-while & Foreach)</li>
                            <li> PHP Programming: Arrays , Super Global Arrays & Functions</li>
                            <li> PHP Programming: Built in functions</li>
                            <li> PHP Programming: Intro to OOP, Data members & Data function</li>
                            <li> PHP Programming: Access modifiers & Encapsulation</li>
                            <li> PHP Programming: Magic Methods, Setter, Getter & Constructors</li>
                            <li> PHP Programming: Inheritances, Polymorphism, Abstraction</li>
                            <li> PHP Programming: Interfaces, Final Class, Static Function</li>
                            <li> Introduction of Git Version-Control System & Git Installation</li>
                            <li> Flow chart of Repositories, Branches & Git Commands</li>
                            <li> Installing SourceTree GUI for Git & Composer Package Manager for PHP</li>
                            <li> Download Latest Laravel Framework via Composer</li>
                            <li> Intro of Laravel Directory Structure, Laravel Routing</li>
                            <li> Laravel Framework: Create Controller via PHP Artisan</li>
                            <li> Laravel Framework: Intro to Blade Template Engine</li>
                            <li> Laravel Framework: Integrating Front-End theme to Laravel</li>
                            <li> Laravel Framework: Build a Template Configuration based</li>
                            <li> Laravel Framework: Create a components blade file and load in main controller file</li>
                            <li> Laravel Framework: Load Layout in controller</li>
                            <li> Laravel Framework: Create a global css and js file and load in main controller</li>
                            <li> Laravel Framework: Download Laravel html collection package (form and html).</li>
                            <li> Laravel Framework: Create a registration form & Intro of CSRF Token</li>
                            <li> Laravel Framework: Create Forms & Handling Client side validation</li>
                            <li> Laravel Framework: Uploading / Downloading Images using Laravel</li>
                            <li> Introduction to Lumen Laravel Micro Framework for REST Services</li>
                            <li> Create & Managing Databases for Web using MySQL</li>
                            <li> Intro of Eloquent Laravel ORM Framework & Installation</li>
                            <li> Database Programming using Eloquent & MySql</li>
                            <li> Migration, Schema Builder, Seeders & Factories Eloquent</li>
                            <li> REST APIs / REST Services: API routes, Controllers & Models</li>
                            <li> Essentials of cURL for Consuming REST APIs / REST Services</li>
                            <li> Consuming REST Services / REST API using AJAX and JSON</li>
                            <li> Essentials of Angular for Creating Modern Web Applications</li>
                            <li> Testing, Debugging & Publishing PHP & Laravel Web Applications</li>
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
                        <p>Participants of the course will develop a commercial level website or e-commerce using HTML5, CSS3, JavaScript, jQuery and BootStrap 5, PHP & Laravel.
                        </p>
                        <h3>Duration & Frequency</h3>
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
export default FullStack
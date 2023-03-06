import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Layout from '../../components/layout'
import Seo from '../../components/seo'

const PhpLaravel = () => {
  return (
    <Layout ptitle="PHP & Laravel">
        <Container>
        <Row className='justify-content-center'>
                <Col sm={12} md={10} lg={10} className='d-flex justify-content-center'>
                    <StaticImage src='../../images/course/php-banner.png' alt='PHP Laravel Web Development course'/>
                </Col>
            </Row>
            <Row className='justify-content-center mt-5'>
                <Col sm={12} md={10} lg={8}>
                    <div>
                        <h1>Certified PHP & Laravel Web Development Course</h1>
                    </div>
                    <div>
                        <p>In this project-based course students will learn web development using PHP 8 and Laravel
                            Framework. It includes essentials of web programming in PHP 8, Object Oriented Programming in
                            PHP 8, Installation and Configuration of Laravel Framework, database development using Eloquent
                            (Laravel ORM Framework) and MySql. The students will also learn to take advantage of Laravel
                            Framework’s MVC Architecture, its Blade template system and its powerful routing features. The
                            course also covers REST APIs / REST Services development using PHP and Laravel Framework.</p>
                        <h2>Brief Contents :</h2>
                        <ul>
                        <li>➔ Setting Development Environment for PHP using Xampp & Netbeans</li>
                        <li>➔ Introduction to PHP 8, Basics PHP syntax & Conditional Statements</li>
                        <li>➔ PHP Programming: Loops (for, While , Do-while & Foreach)</li>
                        <li>➔ PHP Programming: Arrays , Super Global Arrays & Functions</li>
                        <li>➔ PHP Programming: Built in functions</li>
                        <li>➔ PHP Programming: Intro to OOP, Data members & Data function</li>
                        <li>➔ PHP Programming: Access modifiers & Encapsulation</li>
                        <li>➔ PHP Programming: Magic Methods, Setter, Getter & Constructors</li>
                        <li>➔ PHP Programming: Inheritances, Polymorphism, Abstraction</li>
                        <li>➔ PHP Programming: Interfaces, Final Class, Static Function</li>
                        <li>➔ Introduction of Git Version-Control System & Git Installation</li>
                        <li>➔ Flow chart of Repositories, Branches & Git Commands</li>
                        <li>➔ Installing SourceTree GUI for Git & Composer Package Manager for PHP</li>
                        <li>➔ Download Latest Laravel Framework via Composer</li>
                        <li>➔ Intro of Laravel Directory Structure, Laravel Routing</li>
                        <li>➔ Laravel Framework: Create Controller via PHP Artisan</li>
                        <li>➔ Laravel Framework: Intro to Blade Template Engine</li>
                        <li>➔ Laravel Framework: Integrating Front-End theme to Laravel</li>
                        <li>➔ Laravel Framework: Build a Template Configuration based</li>
                        <li>➔ Laravel Framework: Create a components blade file and load in main controller file</li>
                        <li>➔ Laravel Framework: Load Layout in controller</li>
                        <li>➔ Laravel Framework: Create a global css and js file and load in main controller</li>
                        <li>➔ Laravel Framework: Download Laravel html collection package (form and html).</li>
                        <li>➔ Laravel Framework: Create a registration form & Intro of CSRF Token</li>
                        <li>➔ Laravel Framework: Create Forms & Handling Client side validation</li>
                        <li>➔ Laravel Framework: Uploading / Downloading Images using Laravel</li>
                        <li>➔ Introduction to Lumen Laravel Micro Framework for REST Services</li>
                        <li>➔ Create & Managing Databases for Web using MySQL</li>
                        <li>➔ Intro of Eloquent Laravel ORM Framework & Installation</li>
                        <li>➔ Database Programming using Eloquent & MySql</li>
                        <li>➔ Migration, Schema Builder, Seeders & Factories Eloquent</li>
                        <li>➔ REST APIs / REST Services: API routes, Controllers & Models</li>
                        <li>➔ Essentials of cURL for Consuming REST APIs / REST Services</li>
                        <li>➔ Consuming REST Services / REST API using AJAX and JSON</li>
                        <li>➔ Essentials of Angular for Creating Modern Web Applications</li>
                        <li>➔ Testing, Debugging & Publishing PHP & Laravel Web Applications</li>

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
                            <li>Web Developers interesting in Web Development using PHP & Laravel Framework</li>
                            <li>Web Designers interested in Web Development using PHP & Laravel Framework</li>
                            <li>Any person looking for future in Web Development using PHP 8 & Laravel Framework</li>
                        </ul>
                        <h2>Course Project</h2>
                        <p>Participants of the course will develop a commercial level web application with help of their trainers
                            using PHP 8, MySql & Laravel Framework. It includes developing and consuming REST Services
                            and database programming using Eloquent (Laravel ORM Framework).
                        </p>
                        <h2>Duration & Frequency</h2>
                        <p>3 Months (12 weeks) with 3 training sessions of 1.5 hours a week.</p>
                    </div>
                </Col>
            </Row>
        </Container>
    </Layout>
  )
}
export const Head = () => <Seo title="Course" />
export default PhpLaravel
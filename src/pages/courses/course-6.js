import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Layout from '../../components/layout'
import Seo from '../../components/seo'

const WordPressTP = () => {
  return (
    <Layout ptitle="WordPress">
        <Container>
        <Row className='justify-content-center'>
                <Col sm={12} md={10} lg={10} className='d-flex justify-content-center'>
                    <StaticImage src='../../images/course/wordpresstheme-banner.png' alt='Wordpress'/>
                </Col>
            </Row>
            <Row className='justify-content-center mt-5'>
                <Col sm={12} md={10} lg={8}>
                    <div>
                        <h1>Certified WordPress Themes & Plugins Development Course</h1>
                    </div>
                    <div>
                        <p>This course is designed to provide students with a comprehensive understanding of WordPress Themes & Plugins 
                            Development. Students will learn the fundamental concepts, tools, and techniques required to create WordPress 
                            Themes & Plugins. By the end of the course, students will have developed the skills and knowledge necessary to 
                            create custom WordPress Themes & Plugins for their websites.</p>
                        <h2>Brief Contents :</h2>
                        <ul>
                            <li><b> WordPress Foundation</b></li>
                            <ul>
                                <li> Introduction to WordPress</li>
                                <li> WordPress Installation</li>
                                <li> Activating WordPress Themes</li>
                                <li> Starter Theme & Child Theme</li>
                                <li> WordPress Theme Directory Structure</li>
                                <li> Widgetizing Themes</li>
                                <li> WordPress Permalinks</li>
                                <li> Downloading & Activating WordPress Plugins</li>
                            </ul>                            
                                <li><b> PHP for WordPress Plugin Development</b></li>
                            <ul>
                                <li> Fundamentals, Conditional statement</li>
                                <li> Loop, Functions, Arrays</li>
                                <li> Object Oriented Programming in PHP</li>
                            </ul>
                                <li><b> MySql Database for Plugin Development</b></li>
                            <ul>
                                <li> Database Basics</li>
                                <li> Database Designing</li>
                                <li> Create, Retrieve, Update & Delete (CRUD) Operations</li>
                            </ul>
                                <li><b> Introduction to WordPress Plugins</b></li>
                            <ul>
                                <li> What is a Plugin?</li>
                                <li> Available Plugins</li>
                                <li> Advantages of Plugins</li>
                                <li> Installing and Managing Plugins</li>
                            </ul>
                                <li><b> Plugin Foundation</b></li>
                            <ul>
                                <li> Creating a Plugin File</li>
                                <li> Sanity Practices</li>
                                <li> Header Requirements</li>
                                <li> Determining Paths</li>
                                <li> Activate/Deactivate Functions</li>
                                <li> Uninstall Methods</li>
                                <li> Coding Standards</li>
                            </ul>
                                <li><b> Hooks</b></li>
                            <ul>
                                <li> Actions</li>
                                <li> Filters</li>
                                <li> Using Hooks from Within a Class</li>
                                <li> Creating Custom Hooks</li>
                                <li> How to Find Hooks</li>
                            </ul>
                                <li><b> Integrating in WordPress</b></li>
                            <ul>
                                <li> Adding Menus and Submenus</li>
                                <li> Creating Widgets</li>
                                <li> Meta Boxes</li>
                                <li> Keeping It Consistent</li>
                            </ul>
                                <li><b> Internationalization</b></li>
                            <ul>
                                <li> Internationalization and Localization</li>
                                <li> Creating Translation Files</li>
                            </ul>
                                <li><b> Plugin Security</b></li>
                            <ul>
                                <li> Securing Your Plugin</li>
                                <li> User Permissions</li>
                                <li> Nonces</li>
                                <li> Data Validation and Sanitization</li>
                                <li> Formatting Sql Statements</li>
                                <li> Security Good Habits</li>
                            </ul>
                                <li><b> Plugin Settings</b></li>
                            <ul>
                                <li> The Options API</li>
                                <li> The Settings API</li>
                                <li> The Transients API</li>
                                <li> Saving Per-User Settings</li>
                                <li> Storing Data in Custom Tables</li>
                            </ul>
                                <li><b> Users</b></li>
                            <ul>
                                <li> Working with Users</li>
                                <li> Roles and Capabilities</li>
                                <li> Limiting Access</li>
                                <li> Customizing Roles</li>
                            </ul>
                                <li><b> HTTP API</b></li>
                            <ul>
                                <li> HTTP Requests & HTTP Response</li>
                                <li> Making HTTP Requests in PHP</li>
                                <li> WordPress HTTP Functions</li>
                                <li> Reading JSON Data from a Remote API</li>
                                <li> Sending JSON Data to a Remote API</li>
                            </ul>
                                <li><b> The Shortcode API</b></li>
                            <ul>
                                <li> Creating Shortcodes</li>
                                <li> Shortcode Tips</li>
                                <li> Integrating Google Maps</li>
                                <li> More Shortcode Quick Ideas</li>
                            </ul>
                                <li><b> Extending Posts: Metadata, Custom Post Types and Taxonomies</b></li>
                            <ul>
                                <li> Creating Custom Post Types</li>
                                <li> Using Custom Post Types</li>
                                <li> Post Metadata</li>
                                <li> Creating Custom Taxonomies</li>
                                <li> Using Custom Taxonomies</li>
                            </ul>
                                <li><b> Javascript, Jquery & Ajax in WordPress</b></li>
                                <li><b> Cron</b></li>
                            <ul>
                                <li> What is Cron?</li>
                                <li> Scheduling Cron Events</li>
                                <li> True Cron</li>
                                <li> Practical Usage of Corn</li>
                            </ul>
                                <li><b> The Rewrite API</b></li>
                            <ul>
                                <li> Why Rewrite Urls</li>
                                <li> How WordPress Handles Queries</li>
                                <li> Practical Usage of Rewrite API</li>
                            </ul>
                                <li><b> Debugging and Optimizing</b></li>
                            <ul>
                                <li> Debugging</li>
                                <li> Error Logging</li>
                                <li> Caching</li>
                            </ul>
                                <li><b> Marketing Your Plugin</b></li>
                            <ul>
                                <li> Choosing a License For Your Plugin</li>
                                <li> Submitting to wordpress.org</li>
                                <li> Getting your Plugin Renowned</li>
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
export default WordPressTP
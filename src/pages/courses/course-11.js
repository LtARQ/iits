import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import { Link } from 'gatsby'

const Flutter = () => {
  return (
    <Layout ptitle="Flutter">
        <Container>
        <Row className='justify-content-center'>
                <Col sm={12} md={10} lg={10} className='d-flex justify-content-center'>
                    <StaticImage src='../../images/course/flutter-banner.jpg' alt='Flutter'/>
                </Col>
            </Row>
            <Row className='justify-content-center mt-5'>
                <Col sm={12} md={10} lg={8}>
                    <div>
                        <h1>Certified Flutter Mobile App Development Course</h1>
                    </div>
                    <div>
                        <p>This course is designed to make sure that students, who are not much familiar with app development, 
                            can also start with their app development journey. Making apps with flutter is easy as many UI components 
                            are built in and super easy to implement.</p>
                        <h2>Brief Contents :</h2>
                        <ul>
                            <li><b>Module 1: Introduction to Flutter and Dart</b></li>
                            <ul>
                                <li>Introduction to Flutter framework and its features</li>
                                <li>Overview of the Dart programming language</li>
                                <li>Setting up the development environment (installing Flutter SDK, Android Studio, etc.)</li>
                                <li>Creating your first Flutter project</li>                                
                            </ul>                            
                                <li><b>Module 2: Dart Fundamentals</b></li>
                            <ul>
                                <li>Variables, data types, and type inference in Dart</li>
                                <li>Control flow statements (if-else, switch-case, loops)</li>
                                <li>Functions and methods in Dart</li>
                                <li>Object-oriented programming concepts in Dart (classes, objects, inheritance, polymorphism)</li>
                            </ul>
                                <li><b>Module 3: Building User Interfaces with Flutter</b></li>
                            <ul>
                                <li>Introduction to widgets and the widget tree</li>
                                <li>Using layout widgets (Container, Row, Column, Stack, etc.) to create UI layouts</li>
                                <li>Handling user input with input widgets (TextField, Button, Checkbox, etc.)</li>
                                <li>Styling and theming your Flutter app</li>
                                <li>Navigation and routing in Flutter</li>
                            </ul>
                                <li><b>Module 4: State Management in Flutter</b></li>
                            <ul>
                                <li>Understanding the concept of state in Flutter</li>
                                <li>Managing state using setState and StatefulWidget</li>
                                <li>Using provider package for state management</li>
                                <li>State management patterns like BLoC (Business Logic Component) and Redux</li>
                            </ul>
                                <li><b>Module 5: Working with APIs and Data Persistence</b></li>
                            <ul>
                                <li>Making HTTP requests and handling responses using the http package</li>
                                <li>Parsing JSON data and displaying it in your Flutter app</li>
                                <li>Local data persistence using shared_preferences or sqflite package</li>
                            </ul>
                                <li><b>Module 6: Flutter Widgets and Libraries</b></li>
                            <ul>
                                <li>Exploring different Flutter widgets (ListView, GridView, AppBar, BottomNavigationBar, etc.)</li>
                                <li>Using popular libraries and packages in Flutter (http, dio, intl, etc.)</li>
                                <li>Working with images and assets in Flutter</li>
                                <li>Animations and gestures in Flutter</li>
                            </ul>
                                <li><b>Module 7: Testing and Debugging</b></li>
                            <ul>
                                <li>Unit testing in Flutter using the built-in testing framework</li>
                                <li>Widget testing and integration testing</li>
                                <li>Debugging techniques and tools in Flutter (DevTools, logging, breakpoints)</li>
                            </ul>
                                <li><b>Module 8: Deployment and Publishing</b></li>
                            <ul>
                                <li>Preparing your Flutter app for release (optimization, obfuscation, etc.)</li>
                                <li>Generating APK and IPA files for Android and iOS</li>
                                <li>Publishing your app to the Google Play Store and Apple App Store</li>
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
                            <li>Students & Graduates of Computer Science looking for future in Mobile App Development</li>
                            <li>Beginners in flutter development</li>
                            <li>Beginners in Android and iOS development</li>
                            <li>Basics programming knowledge require</li>
                        </ul>
                        <h2>Course Project</h2>
                        <p>Participants of the course will develop a commercial level web application with help of their trainers
                            using PHP 8, MySql & Laravel Framework. It includes developing and consuming REST Services
                            and database programming using Eloquent (Laravel ORM Framework).
                        </p>
                        <h2>Duration & Frequency</h2>
                        <p>4 Months (16 weeks) with 3 training sessions of 1.5 hours a week.</p>
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
export default Flutter
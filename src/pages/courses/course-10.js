import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import { Link } from 'gatsby'

const GraphicDesigning = () => {
  return (
    <Layout ptitle="Graphics Designing">
        <Container>
        <Row className='justify-content-center'>
                <Col sm={12} md={10} lg={10} className='d-flex justify-content-center'>
                    <StaticImage src='../../images/course/graphic-banner.jpg' alt='Graphic Designing'/>
                </Col>
            </Row>
            <Row className='justify-content-center mt-5'>
                <Col sm={12} md={10} lg={8}>
                    <div>
                        <h1>Certified Graphics & Web Designing Course</h1>
                    </div>
                    <div>
                        <p>This course is designed to develop a strong foundation of the students for developing powerful visual 
                            communications. Students will learn to visualize the concepts, techniques of graphics and design and 
                            application of software like Adobe Illustrator / CorelDraw, Photoshop and InDesign for creating 
                            effective designs for print media, outdoor advertisement and the web.The course will also cover Web designing.</p>
                        <h2>Brief Contents :</h2>
                        <ul>
                            <li>Essentials of graphics, design and color theory</li>
                            <li>Working with Illustrator documents</li>
                            <li>Drawing and transforming objects</li>
                            <li>Managing color and transparency</li>
                            <li>Typography and using type in Illustrator</li>
                            <li>Controlling effects, appearances, and graphic style</li>
                            <li>Building graphic objects and working with images</li>
                            <li>Preparing graphics for web or screen display</li>
                            <li>Photoshop Intro, working with selections and layers</li>
                            <li>Using masks and channels</li>
                            <li>Working with type and vector tools</li>
                            <li>Adjusting and processing photographs</li>
                            <li>Retouching and manipulating images</li>
                            <li>Working in Adobe Camera Raw</li>
                            <li>Painting and filtering an image</li>
                            <li>Generating Output for Print media and the web</li>
                            <li>Creating web pages using HTML and XHTML</li>
                            <li>Controlling page styles and layout with CSS</li>
                            <li>Adding graphics and multimedia in web pages</li>
                            <li>Using Dreamweaver for rapid web development</li>
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
                            <li>Students & Graduates of any discipline</li>
                            <li>People looking for career in graphics and web designing</li>
                        </ul>
                        <h2>Course Project</h2>
                        <p>Participants of the course will be able to develop a design theme according to given 
                            requirements of a company. Student will also create logo, stationary, brochure, posters, banners, billboard and 
                            website of a company according to designed theme.
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
export default GraphicDesigning
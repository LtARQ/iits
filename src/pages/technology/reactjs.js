import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import Layout from "../../components/layout"
import Seo from '../../components/seo'
const ReactJS = () => {
  return (
    <Layout ptitle="React JS">
        <Container >
            <Row className='justify-content-center mb-5'>
                <Col className='d-flex justify-content-center align-items-center'>
                <h1>React JS</h1>
                </Col>
                <Col className='d-flex justify-content-center align-items-center'>
                    <StaticImage src='../../images/reactjs.png' alt='react' height="200px" width='130px' style={{objectFit:`contain`}}/>
                </Col>
            </Row>
            <Row className='justify-content-center'>
            <Col sm={12} md={10} lg={8} className='d-flex align-items-center'>
                <div>
                    <p>React JS is an open-source JavaScript library used for building user interfaces (UIs) and web applications. It was 
                        developed by Facebook and is now maintained by Facebook and a community of developers. React is a popular technology 
                        for creating dynamic and responsive web pages.</p>
                    <p>React allows developers to create reusable UI components that can be used across multiple applications, which saves 
                        time and improves consistency in design. It also provides a virtual DOM (Document Object Model), which allows for 
                        efficient updates to the UI, making it faster than traditional DOM manipulation.</p>
                    <p>React follows a component-based architecture where each component has its own logic and rendering. These components are 
                        then combined to create the final UI. React also supports server-side rendering, which improves SEO and page loading times.</p>
                    <p>React has a strong ecosystem of tools and libraries, including React Router for managing routing in a single-page application, 
                        Redux for managing application state, and React Native for building mobile applications.</p>
                    <p>Overall, React is a powerful and flexible technology that enables developers to create high-performance, scalable, and 
                        reusable web applications.</p>
                        <h3>Get the Course:</h3>
                </div>
            </Col>
            <Col sm={12} md={10} lg={8} className='d-flex justify-content-center'>
                <Link to='/courses/course-3'><Button variant='outline-primary' className='p-3 my-4'>Certified React JS Web Developer Course</Button></Link>
            </Col>
            </Row>
        </Container>
    </Layout>
  )
}
export const Head = () => <Seo title="React JS" />
export default ReactJS
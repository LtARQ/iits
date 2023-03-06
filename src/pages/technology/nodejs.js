import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import Layout from "../../components/layout"
import Seo from '../../components/seo'
const NodeJs = () => {
  return (
    <Layout ptitle="Node JS">
        <Container >
        <Row className='justify-content-center mb-5'>
                <Col className='d-flex justify-content-center align-items-center'>
                <h1>Node JS</h1>
                </Col>
                <Col className='d-flex justify-content-center align-items-center'>
                    <StaticImage src='../../images/nodejs.png' alt='nodejs' height="350px" width='300px' style={{objectFit:`contain`}}/>
                </Col>
            </Row>
            <Row className='justify-content-center'>
            <Col sm={12} md={10} lg={8} className='d-flex align-items-center'>
                <div>
            <p>Node.js is an open-source, cross-platform, server-side JavaScript runtime environment that is built on the Chrome V8 JavaScript 
                engine. It was developed by Ryan Dahl in 2009 and is now maintained by the Node.js Foundation and a community of developers.</p>
            <p>Node.js enables developers to build scalable and high-performance network applications using JavaScript on the server-side. 
                It provides an event-driven, non-blocking I/O model that makes it lightweight and efficient. This means that Node.js can handle 
                large amounts of data and requests without slowing down or blocking the server.</p>
            <p>Node.js also provides a vast library of modules and packages through the Node Package Manager (NPM), which makes it easy for 
                developers to build complex applications. The NPM registry contains over one million packages, including libraries for database 
                connectivity, server-side rendering, web sockets, and more.</p>
            <p>Node.js is commonly used for building real-time web applications, such as chat applications, gaming platforms, and collaboration 
                tools. It is also used for building microservices, APIs, and serverless functions.</p>
            <p>In summary, Node.js is a powerful and flexible technology that allows developers to build high-performance and scalable 
                server-side applications using JavaScript. Its event-driven, non-blocking I/O model and vast library of modules make it a 
                popular choice for building modern web applications.</p>
                <br/>
                <h3>Get The Course:</h3>
                </div>
            </Col>
            <Col sm={12} md={10} lg={8} className='d-flex justify-content-center'>
                <Link to='/courses/course-3'><Button variant='outline-primary' className='p-3 my-4'>Certified Node JS Web Developer Course</Button></Link>
            </Col>
            </Row>
        </Container>
    </Layout>
  )
}
export const Head = () => <Seo title="Node JS" />
export default NodeJs
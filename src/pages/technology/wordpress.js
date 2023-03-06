import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import Layout from "../../components/layout"
import Seo from '../../components/seo'
const WordPress = () => {
  return (
    <Layout ptitle="WordPress">
        <Container>
        <Row className='justify-content-center mb-5'>
                <Col className='d-flex justify-content-center align-items-center'>
                <h1>WordPress</h1>
                </Col>
                <Col className='d-flex justify-content-center align-items-center'>
                    <StaticImage src='../../images/wordpress.png' alt='wordpress' height="350px" width='260px' style={{objectFit:`contain`}}/>
                </Col>
            </Row>
            <Row className='justify-content-center'>
            <Col sm={12} md={10} lg={8} className='d-flex align-items-center'>
                <div>
                <p>WordPress is a free and open-source content management system (CMS) that is used to build and manage websites and blogs. 
                    It was initially released in 2003 and is now maintained by the WordPress Foundation and a large community of developers.</p>
                <p>WordPress is based on PHP and uses a MySQL database to store content. It provides a user-friendly interface for creating and 
                    managing content, and allows users to customize their websites through themes and plugins.</p>
                <p>One of the main advantages of WordPress is its ease of use and flexibility. It can be used to build a wide range of websites, 
                    from simple blogs to complex e-commerce sites. 
                    It also provides a vast library of themes and plugins that allow users to customize their websites without needing to write any code.</p>
                <p>WordPress is also SEO-friendly and provides built-in features for optimizing websites for search engines. It includes support for metadata, 
                    sitemaps, and clean URLs, which can improve a website's visibility in search results.</p>
                <p>Another notable feature of WordPress is its strong community support and vast ecosystem of developers and designers. The WordPress 
                    community has created numerous 
                    themes and plugins that extend the functionality of the CMS and make it easy for users to add new features to their websites.</p>
                <p>Despite its popularity, WordPress has faced criticism for its security vulnerabilities and performance issues. However, with good 
                    security practices and the use of caching and optimization plugins, these issues can be mitigated.</p>
                <p>Overall, WordPress is a popular and flexible CMS that is easy to use and customize. Its vast ecosystem of themes and plugins, 
                    strong community support, and SEO-friendly features make it a popular choice for building and managing websites.</p>
                    <br/>
                <h3>Get The Course:</h3>
                </div>
            </Col>
            <Col sm={12} md={10} lg={8} className='d-flex justify-content-center'>
                <Link to='/courses/course-5'><Button variant='outline-primary' className='p-3 my-4'>Certified WordPress Web Developer Course</Button></Link>
            </Col>
            <Col sm={12} md={10} lg={8} className='d-flex justify-content-center'>
                <Link to='/courses/course-6'><Button variant='outline-primary' className='p-3 my-4'>Certified WordPress Themes & Plugins Developer Course</Button></Link>
            </Col>
            </Row>
        </Container>
    </Layout>
  )
}
export const Head = () => <Seo title="Wordpress" />
export default WordPress
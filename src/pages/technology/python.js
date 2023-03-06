import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import Layout from "../../components/layout"
import Seo from '../../components/seo'
const python = () => {
  return (
    <Layout ptitle="Python">
        <Container>
        <Row className='justify-content-center mb-5'>
          <Col className='d-flex justify-content-center align-items-center'>
            <h1>Python</h1>
          </Col>
          <Col className='d-flex justify-content-center align-items-center'><StaticImage src='../../images/python.png' alt='python' height='100px' width='200px' style={{objectFit:`contain`}}/></Col>
        </Row>
        <Row className='justify-content-center'>
            <Col sm={12} md={10} lg={8} className='d-flex align-items-center'>
                <div>
                <p>Python is a high-level programming language known for its simplicity, readability, and versatility. 
                    It is widely used in web development, scientific computing, data analysis, artificial intelligence, 
                    and many other fields. Some popular Python frameworks for web development include Django, Flask, Pyramid, and CherryPy.
                </p>
                <h2>Scope</h2>
                <p>Python is a powerful and versatile programming language that has a wide range of applications in various fields. Here are some of the areas where Python is widely used:</p>
                <ul>
                    <li><b>Web Development:</b> Python has several frameworks such as Django and Flask that are widely used for developing web 
                        applications. These frameworks provide a simple and elegant way to build complex web applications.</li>
                    <li><b>Data Science:</b> Python has become the go-to language for data scientists and analysts due to its simplicity, 
                        flexibility, and wide range of data analysis libraries such as NumPy, Pandas, and SciPy. Python is also widely 
                        used for machine learning and artificial intelligence applications.</li>
                    <li><b>Scientific Computing:</b> Python has many libraries that are used for scientific computing and numerical analysis, 
                        making it popular in fields such as physics, chemistry, and engineering.</li>
                    <li><b>Education:</b> Python is widely used in educational institutions to teach programming concepts due to its 
                        easy-to-learn syntax and powerful capabilities.</li>
                    <li><b>Automation:</b> Python has many libraries that can be used for automation, such as Selenium for web automation and 
                        PyAutoGUI for desktop automation. This makes Python a popular choice for automating repetitive tasks.</li>
                    <li><b>Game Development:</b> Python has several game development libraries such as Pygame and PyOpenGL, which are widely 
                        used for developing games.</li>
                    <li><b>Robotics:</b> Python is widely used in robotics due to its simplicity and ease of use. Libraries such as PySerial 
                        and PyUSB make it easy to communicate with robots and other devices.</li>
                </ul>
                <p>Overall, the scope of Python is quite broad, and it is expected to continue to grow in popularity due to its 
                    ease of use, versatility, and wide range of applications.</p>

                <h2>Django</h2>
                <p>Django is a high-level Python web framework that follows the model-template-view (MTV) architectural pattern. 
                    It provides a robust set of tools and libraries for building web applications quickly and efficiently. 
                    Some of its features include:</p>
                <ul>
                    <li>Object-Relational Mapping (ORM): Django's ORM allows developers to interact with a database using Python objects instead of SQL queries.</li>
                    <li>Admin Interface: Django provides an out-of-the-box admin interface that allows developers to manage the application's data, users, and groups easily.</li>
                    <li>URL Routing: Django's URL routing system maps URLs to views, making it easy to create SEO-friendly URLs.</li>
                    <li>Template System: Django's template system allows developers to create reusable HTML templates that can be customized for each page.</li>
                    <li>Security: Django provides several security features out-of-the-box, such as protection against cross-site scripting (XSS) and cross-site request forgery (CSRF) attacks.</li>
                </ul>
                <h4>Get The Course:</h4>
                </div>
                </Col>
                <Col sm={12} md={10} lg={8} className='d-flex justify-content-center'>
                <Link to='/courses/course-4'><Button variant='outline-primary' className='p-3 my-4'>Certified Python & Django Web Developer Course</Button></Link>
                
                </Col>
            </Row>
        </Container>
    </Layout>
  )
}
export const Head = () => <Seo title="Python" />
export default python
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import Layout from "../../components/layout"
import Seo from '../../components/seo'
const Flutter = () => {
  return (
    <Layout ptitle="Flutter">
        <Container>
        <Row className='justify-content-center mb-5'>
                <Col className='d-flex justify-content-center align-items-center'>
                <h1>Flutter</h1>
                </Col>
                <Col className='d-flex justify-content-center align-items-center'>
                    <StaticImage src='../../images/flutter.png' alt='wordpress' height="350px" width='120px' style={{objectFit:`contain`}}/>
                </Col>
            </Row>
            <Row className='justify-content-center'>
            <Col sm={12} md={10} lg={8} className='d-flex align-items-center'>
                <div>
                <p>Flutter is an open-source mobile application development framework created by Google in 2017. It uses the Dart programming 
                    language and provides a fast and efficient way to build high-quality native mobile applications for iOS and Android.</p>
                <p>Flutter provides a rich set of customizable widgets and tools that make it easy to build beautiful and responsive user 
                    interfaces. It also supports hot-reload, which allows developers to see the changes they make in the code immediately 
                    in the app without the need to rebuild it.</p>
                <p>Another notable feature of Flutter is its high performance and efficiency. It uses a fast and modern rendering engine 
                    that provides smooth animations and transitions, even on older devices. It also uses ahead-of-time (AOT) compilation, 
                    which allows Flutter apps to start up quickly and provide a smooth user experience.</p>
                <p>Flutter also provides a wide range of packages and plugins that can be used to extend its functionality and integrate 
                    with other services and platforms. It has plugins for integrating with Firebase, Google Maps, and other popular services.</p>
                <p>One of the main advantages of Flutter is its ability to provide a consistent and high-quality user experience across different 
                    platforms. It uses a single codebase to build both iOS and Android apps, which can save time and reduce development costs. 
                    It also provides a customizable widget set that can adapt to different platform design guidelines.</p>
                <p>Overall, Flutter is a powerful and flexible mobile application development framework that provides a fast and efficient 
                    way to build high-quality native mobile apps for iOS and Android. Its customizable widgets, hot-reload feature, and wide 
                    range of packages and plugins make it a popular choice for mobile app development.</p>
                    <br/>
                <h3>Get The Course:</h3>
                </div>
            </Col>
            <Col sm={12} md={10} lg={8} className='d-flex justify-content-center'>
                <Link to='/courses'><Button variant='outline-primary' className='p-3 my-4'>Certified Flutter Web Developer Course</Button></Link>
            </Col>
            </Row>
      </Container>
    </Layout>
  )
}
export const Head = () => <Seo title="Flutter" />
export default Flutter
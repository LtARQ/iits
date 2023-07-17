import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import * as React from 'react'
import { Button, Card, Col, Container, ListGroup, Row } from 'react-bootstrap'
import Layout from '../components/layout'
import Seo from '../components/seo'
const schedule = () => {
  return (
    <>
    <Layout ptitle="Schedule">
      <Container>
      <div className="section-title position-relative text-center mb-5 pb-2 wow fadeInUp" data-wow-delay="0.1s">
                    <h6 className="position-relative d-inline text-primary ps-4">Schedule</h6>
                    <h2 className="mt-2">Recently Launched Courses</h2>
                </div>
        <Row >
          <Col xs={12} md={6} lg={4} className='mt-4'>
            <Card >
            <StaticImage className="img-fluid w-100" src="../images/course/fullstack-banner.png" alt="ful stack"/>
              <Card.Body>
                <Card.Title >Certified Front-End Web Development Course</Card.Title>
                <Card.Text className='text-primary pt-3 pb-0'>
                  <p className='text-primary'>Free Saminar on March 26, 2023 at 12:00 PM </p>
                  <p>Classes Start from April 01, 2023. PST</p>
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>Saturday &#8199;&#8199;&#8199;&#8199;&#8199;:&#8199;12:00 PM To 01:30 PM</ListGroup.Item>
                <ListGroup.Item>Sunday &#8199;&#8199;&#8199;&#8199;&#8199;&#8199;:&#8199; 12:00 PM To 01:30 PM</ListGroup.Item>
                <ListGroup.Item>Sunday (Lab) &#8199;:&#8199; 01:30 PM To 03:00 PM</ListGroup.Item>
              </ListGroup>
              <Card.Body>
                <Link to='/courses/course-1'><Button>Course Details</Button></Link>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6} lg={4} className='mt-4'>
            <Card >
            <StaticImage className="img-fluid w-100" src="../images/course/python-banner.png" alt="python"/>
              <Card.Body>
                <Card.Title >Certified Python & Django Web Development Course</Card.Title>
                <Card.Text className='text-primary pt-3 pb-0'>
                  <p className='text-primary'>Free Saminar on March 26, 2023 at 12:00 PM </p>
                  <p>Classes Start from April 01, 2023. PST</p>
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>Saturday &#8199;&#8199;&#8199;&#8199;&#8199;:&#8199; 10:30 AM To 12:00 PM</ListGroup.Item>
                <ListGroup.Item>Sunday &#8199;&#8199;&#8199;&#8199;&#8199;&#8199;:&#8199; 10:30 AM To 12:00 PM</ListGroup.Item>
                <ListGroup.Item>Sunday (Lab) &#8199;:&#8199; 01:30 PM To 03:00 PM</ListGroup.Item>
              </ListGroup>
              <Card.Body>
                <Link to='/courses/course-4'><Button>Course Details</Button></Link>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6} lg={4} className='mt-4'>
            <Card >
            <StaticImage className="img-fluid w-100" src="../images/course/php-banner.png" alt="php"/>
              <Card.Body>
                <Card.Title >Certified PHP & Laravel Web Development Course</Card.Title>
                <Card.Text className='text-primary pt-3 pb-0'>
                  <p className='text-primary'>Free Saminar on March 26, 2023 at 12:00 PM </p>
                  <p>Classes Start from April 01, 2023. PST</p>
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>Saturday &#8199;&#8199;&#8199;&#8199;&#8199;:&#8199; 12:00 PM To 01:30 PM</ListGroup.Item>
                <ListGroup.Item>Sunday &#8199;&#8199;&#8199;&#8199;&#8199;&#8199;:&#8199; 12:00 PM To 01:30 PM</ListGroup.Item>
                <ListGroup.Item>Sunday (Lab) &#8199;:&#8199; 01:30 PM To 03:00 PM</ListGroup.Item>
              </ListGroup>
              <Card.Body>
                <Link to='/courses/course-2'><Button>Course Details</Button></Link>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6} lg={4} className='mt-4'>
            <Card >
            <StaticImage className="img-fluid w-100" src="../images/course/node-banner.png" alt="MERN stack"/>
              <Card.Body>
                <Card.Title >Certified MERN Stack Web Development Course</Card.Title>
                <Card.Text className='text-primary pt-3 pb-0'>
                  <p className='text-primary'>Free Saminar on March 26, 2023 at 12:00 PM </p>
                  <p>Classes Start from April 01, 2023. PST</p>
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>Saturday &#8199;&#8199;&#8199;&#8199;&#8199;:&#8199; 02:00 PM To 03:30 PM</ListGroup.Item>
                <ListGroup.Item>Sunday &#8199;&#8199;&#8199;&#8199;&#8199;&#8199;:&#8199; 4:00 PM To 05:30 PM</ListGroup.Item>
                <ListGroup.Item>Sunday (Lab) &#8199;:&#8199; 05:30 PM To 07:00 PM</ListGroup.Item>
              </ListGroup>
              <Card.Body>
                <Link to='/courses/course-3'><Button>Course Details</Button></Link>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6} lg={4} className='mt-4'>
            <Card>
            <StaticImage className="img-fluid w-100" src="../images/course/wordpress-banner.png" alt="wordpress"/>
              <Card.Body>
                <Card.Title>Certified Wordpress Web Development Course</Card.Title>
                <Card.Text className='text-primary pt-3 pb-0'>
                  <p>Free Saminar on March 26, 2023 at 12:00 PM </p>
                  <p>Classes Start from April 01, 2023. PST</p>
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>Saturday &#8199;&#8199;&#8199;&#8199;&#8199;:&#8199; 10:30 AM To 12:00 PM</ListGroup.Item>
                <ListGroup.Item>Sunday &#8199;&#8199;&#8199;&#8199;&#8199;&#8199;:&#8199; 10:30 AM To 12:00 PM</ListGroup.Item>
                <ListGroup.Item>Sunday (Lab) &#8199;:&#8199; 01:30 PM To 03:00 PM</ListGroup.Item>
              </ListGroup>
              <Card.Body>
                <Link to='/courses/course-5'><Button>Course Details</Button></Link>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6} lg={4} className='mt-4'>
            <Card >
            <StaticImage className="img-fluid w-100" src="../images/course/wordpresstheme-banner.png" alt="wordpress"/>
              <Card.Body>
                <Card.Title>Certified Advance Wordpress Themes & Plugin Development Course</Card.Title>
                <Card.Text className='text-primary pt-3 pb-0'>
                  <p>Free Saminar on April 29, 2023 at 12:00 PM </p>
                  <p>Classes Start from April 30, 2023. PST</p>
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>Saturday &#8199;&#8199;&#8199;&#8199;&#8199;:&#8199; 12:00 PM To 01:30 PM</ListGroup.Item>
                <ListGroup.Item>Sunday &#8199;&#8199;&#8199;&#8199;&#8199;&#8199;:&#8199; 12:00 PM To 01:30 PM</ListGroup.Item>
                <ListGroup.Item>Sunday (Lab) &#8199;:&#8199; 01:30 PM To 03:00 PM</ListGroup.Item>
              </ListGroup>
              <Card.Body>
                <Link to='/courses/course-6'><Button>Course Details</Button></Link>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6} lg={4} className='mt-4'>
            <Card >
            <StaticImage className="img-fluid w-100" src="../images/course/angular-banner.jpg" alt="angular"/>
              <Card.Body>
                <Card.Title>Certified Angular JS App Development Course</Card.Title>
                <Card.Text className='text-primary pt-3 pb-0'>
                  <p>Free Saminar on April 29, 2023 at 12:00 PM </p>
                  <p>Classes Start from April 30, 2023. PST</p>
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>Saturday &#8199;&#8199;&#8199;&#8199;&#8199;:&#8199; 12:00 PM To 01:30 PM</ListGroup.Item>
                <ListGroup.Item>Sunday &#8199;&#8199;&#8199;&#8199;&#8199;&#8199;:&#8199; 12:00 PM To 01:30 PM</ListGroup.Item>
                <ListGroup.Item>Sunday (Lab) &#8199;:&#8199; 01:30 PM To 03:00 PM</ListGroup.Item>
              </ListGroup>
              <Card.Body>
                <Link to='/courses/course-7'><Button>Course Details</Button></Link>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6} lg={4} className='mt-4'>
            <Card >
            <StaticImage className="img-fluid w-100" src="../images/course/flutter-banner.jpg" alt="Flutter"/>
              <Card.Body>
                <Card.Title>Certified Flutter Mobile App Development Course</Card.Title>
                <Card.Text className='text-primary pt-3 pb-0'>
                  <p>Free Saminar on April 29, 2023 at 12:00 PM </p>
                  <p>Classes Start from April 30, 2023. PST</p>
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>Saturday &#8199;&#8199;&#8199;&#8199;&#8199;:&#8199; 12:00 PM To 01:30 PM</ListGroup.Item>
                <ListGroup.Item>Sunday &#8199;&#8199;&#8199;&#8199;&#8199;&#8199;:&#8199; 12:00 PM To 01:30 PM</ListGroup.Item>
                <ListGroup.Item>Sunday (Lab) &#8199;:&#8199; 01:30 PM To 03:00 PM</ListGroup.Item>
              </ListGroup>
              <Card.Body>
                <Link to='/courses/course-11'><Button>Course Details</Button></Link>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6} lg={4} className='mt-4'>
            <Card >
            <StaticImage className="img-fluid w-100" src="../images/course/fullstack2-banner.jpg" alt="Full Stack"/>
              <Card.Body>
                <Card.Title>Certified Full Stack Web Development Course</Card.Title>
                <Card.Text className='text-primary pt-3 pb-0'>
                  <p>Free Saminar on April 29, 2023 at 12:00 PM </p>
                  <p>Classes Start from April 30, 2023. PST</p>
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>Saturday &#8199;&#8199;&#8199;&#8199;&#8199;:&#8199; 12:00 PM To 01:30 PM</ListGroup.Item>
                <ListGroup.Item>Sunday &#8199;&#8199;&#8199;&#8199;&#8199;&#8199;:&#8199; 12:00 PM To 01:30 PM</ListGroup.Item>
                <ListGroup.Item>Sunday (Lab) &#8199;:&#8199; 01:30 PM To 03:00 PM</ListGroup.Item>
              </ListGroup>
              <Card.Body>
                <Link to='/courses/course-12'><Button>Course Details</Button></Link>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6} lg={4} className='mt-4'>
            <Card >
            <StaticImage className="img-fluid w-100" src="../images/course/communication-banner.jpg" alt="Communication Skills"/>
              <Card.Body>
                <Card.Title>Certified Communication Skills Course</Card.Title>
                <Card.Text className='text-primary pt-3 pb-0'>
                  <p>Free Saminar on April 29, 2023 at 12:00 PM </p>
                  <p>Classes Start from April 30, 2023. PST</p>
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>Saturday &#8199;&#8199;&#8199;&#8199;&#8199;:&#8199; 12:00 PM To 01:30 PM</ListGroup.Item>
                <ListGroup.Item>Sunday &#8199;&#8199;&#8199;&#8199;&#8199;&#8199;:&#8199; 12:00 PM To 01:30 PM</ListGroup.Item>
                <ListGroup.Item>Sunday (Lab) &#8199;:&#8199; 01:30 PM To 03:00 PM</ListGroup.Item>
              </ListGroup>
              <Card.Body>
                <Link to='/courses/course-8'><Button>Course Details</Button></Link>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6} lg={4} className='mt-4'>
            <Card >
            <StaticImage className="img-fluid w-100" src="../images/course/digitalmarketing-banner.jpg" alt="Digital Marketing"/>
              <Card.Body>
                <Card.Title>Certified Digital Marketing Course</Card.Title>
                <Card.Text className='text-primary pt-3 pb-0'>
                  <p>Free Saminar on April 29, 2023 at 12:00 PM </p>
                  <p>Classes Start from April 30, 2023. PST</p>
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>Saturday &#8199;&#8199;&#8199;&#8199;&#8199;:&#8199; 12:00 PM To 01:30 PM</ListGroup.Item>
                <ListGroup.Item>Sunday &#8199;&#8199;&#8199;&#8199;&#8199;&#8199;:&#8199; 12:00 PM To 01:30 PM</ListGroup.Item>
                <ListGroup.Item>Sunday (Lab) &#8199;:&#8199; 01:30 PM To 03:00 PM</ListGroup.Item>
              </ListGroup>
              <Card.Body>
                <Link to='/courses/course-9'><Button>Course Details</Button></Link>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6} lg={4} className='mt-4'>
            <Card >
            <StaticImage className="img-fluid w-100" src="../images/course/graphic-banner.jpg" alt="Grapgics Designing"/>
              <Card.Body>
                <Card.Title>Certified Graphics Designing Course</Card.Title>
                <Card.Text className='text-primary pt-3 pb-0'>
                  <p>Free Saminar on April 29, 2023 at 12:00 PM </p>
                  <p>Classes Start from April 30, 2023. PST</p>
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>Saturday &#8199;&#8199;&#8199;&#8199;&#8199;:&#8199; 12:00 PM To 01:30 PM</ListGroup.Item>
                <ListGroup.Item>Sunday &#8199;&#8199;&#8199;&#8199;&#8199;&#8199;:&#8199; 12:00 PM To 01:30 PM</ListGroup.Item>
                <ListGroup.Item>Sunday (Lab) &#8199;:&#8199; 01:30 PM To 03:00 PM</ListGroup.Item>
              </ListGroup>
              <Card.Body>
                <Link to='/courses/course-10'><Button>Course Details</Button></Link>
              </Card.Body>
            </Card>
          </Col>
          
        </Row>
      </Container>
    </Layout>
    </>
  )
}
export const Head = () => <Seo title="Courses Schedule" />
export default schedule

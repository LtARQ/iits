import * as React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AboutC from '../components/AboutC'
import Layout from '../components/layout'
import Seo from '../components/seo'
import TeamC from '../components/TeamC'
const about = () => {
  return (
    <>
    <Layout ptitle="About Us">
      <AboutC/>
      <Container className='justify-content-center'>
                <Row className='justify-content-center'>
                    <Col lg={8} className='px-lg-5'>
                        <h1  className='cngclr-l' style={{
                            marginBottom:`3rem`, textAlign:`center`, textDecoration:`underline`,
                            }}>Our Vision</h1>
                        <div className='vision-align'>
                            <p>The vision of IITS is to be a leading center of excellence in the field of Information Technology, 
                                where students, faculty, and industry professionals come together to innovate, create, and shape the future of technology.</p>
                            <p>IITS is a place that fosters innovation, creativity, and collaboration in the field of Information Technology. 
                                It is a center of excellence where students, 
                                researchers, and industry professionals come together to learn, experiment, and develop new technologies.</p>
                            <p>In IITS, students will have access to cutting-edge technology and tools that will allow them to learn and 
                                apply the latest trends and best practices in the field of IT. They will be able to participate in hands-on projects, 
                                hackathons, and competitions, which will allow them to hone their skills and gain practical experience.</p>
                            <p>The faculty at this IT Institute will be comprised of leading experts in various fields of IT, who will bring their 
                                extensive industry experience to the classroom. They will provide guidance and mentorship to students, 
                                as well as collaborate on research projects to push the boundaries of what is possible in the field.</p>
                            <p>Industry partnerships will also be a key aspect of this IT Institute, with top companies in the field of IT partnering to 
                                provide internships, guest lectures, and job opportunities to students. This will enable students to gain real-world 
                                experience and build relationships with potential employers, 
                                also keeping the curriculum up-to-date with industry standards.</p>

                        </div>
                    </Col>
                </Row>
            </Container>
      <TeamC />
    </Layout>
    </>
    
  )
}
export const Head = () => <Seo title="About Us" />
export default about

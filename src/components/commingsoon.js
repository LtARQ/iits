import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Commingsoon = () => {
  return (
    <Container className='d-flex justify-content-center' style={{minHeight: `50vh`, alignItems: `center`}}>
        <Row>
            <Col>
                <h1 style={{color: `var(--primary)`}}>Comming Soon !!</h1>
            </Col>
        </Row>
    </Container>
  )
}

export default Commingsoon
import * as React from "react"
import {Col, Container, Row} from "react-bootstrap"
const HeroA = ({ tt }) => {
    return (
    <>
        <Container className="my-5 py-5 px-lg-5">
            <Row className="g-5 py-5">
                <Col className="text-center" style={{minHeight: ``}}>
                    <h1 className="text-white animated zoomIn">{tt}</h1>
                    <hr className="bg-white mx-auto mt-0" style={{width: `90px`}}/>
                </Col>
            </Row>
        </Container>
            
    </>
    )
}
export default HeroA

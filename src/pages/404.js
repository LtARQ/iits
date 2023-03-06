import * as React from "react"
import { Col, Container, Row } from "react-bootstrap"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <Layout ptitle="404: Not Found">
    <Container>
      <Row className="justify-content-center">
        <Col sm={6} className="">
        <h1>404: Not Found</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        </Col>
      </Row>
    </Container>
    
  </Layout>
)

export const Head = () => <Seo title="404: Not Found" />

export default NotFoundPage

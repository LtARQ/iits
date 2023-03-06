import * as React from "react"
import { Link } from "gatsby"
import {Container, Nav, NavDropdown, Navbar} from "react-bootstrap"
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse"
import imges from '../images/img/bg-dot.png'
import imges1 from '../images/img/bg-round.png'
import imges2 from '../images/img/bg-tree.png'
import imges3 from '../images/img/bg-bottom-hero.png'
import HeroA from "./HeroA"
import HeroB from "./HeroB"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPen} from '@fortawesome/free-solid-svg-icons'
const Header = (props) => {
    
    const isHomePage = props.homeUrl === "/" 
    return (
        <>
    <Container className="position-relative p-0" id="ttop">
        <Navbar className="px-4 px-lg-5 py-5 py-lg-0" expand="lg">
            <Link to="/" className="navbar-brand p-0">
                <Navbar.Brand>
                <h1 className="m-0"><FontAwesomeIcon icon={faPen} className="me-2"/>
                {props.siteTitle}
                <span style={{fontSize: `.75rem`}}> Institute of Infomartion Technology skills</span></h1>
                </Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls="navbarCollapse" /> 
            <NavbarCollapse id="navbarCollapse">
                <Nav className="navbar-nav ms-auto py-0">
                    <Link to="/"><Nav className="nav-item nav-link">Home</Nav></Link>
                    <Link to="/courses"><Nav className="nav-item nav-link ">Courses</Nav></Link>
                    <Link to="/schedule"><Nav className="nav-item nav-link ">Schedule</Nav></Link>
                    <Link to="/certification"><Nav className="nav-item nav-link ">Certification</Nav></Link>
                    <NavDropdown id="nav-dropdown-dark-example" title="Profile" menuVariant="light">
                        <NavDropdown.Item><Link to="/about">About us</Link></NavDropdown.Item>
                        <NavDropdown.Item><Link to="/team">Our Team</Link></NavDropdown.Item>
                        <NavDropdown.Item><Link to="/vision">Vision</Link></NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item><Link to="/contact">Contact Us</Link></NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Link to="/contact"><Nav  className="btn btn-secondary text-light rounded-pill py-2 px-4 ms-3">Register</Nav></Link>
            </NavbarCollapse>
        </Navbar>

        <Container className="py-5 bg-primary hero-header mb-5" 
            style={{
                background: `url(${imges}),url(${imges1}),url(${imges2}),url(${imges3}),url(${imges})`,
                backgroundPosition:`10px 10px,bottom 100% right 40%,left 45% top 100%,left 4% bottom ,right 1px bottom 33%`,
                backgroundRepeat: `no-repeat`,
                }}>
            {isHomePage ? <HeroB/> : <HeroA tt={props.pTitle} />}
        </Container>
    </Container>
    </>
    )  
}

export default Header

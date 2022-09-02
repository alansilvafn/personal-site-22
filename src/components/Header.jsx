import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Badge from 'react-bootstrap/Badge';
import memoji from '../assets/img/memoji.webp'
import { FaLinkedin, FaGithub } from 'react-icons/fa'

function Header() {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" className="py-3 mb-5 sticky-md-top">
            <Container className="d-block text-center d-md-flex text-md-start">
                <div className="presentation text-white d-md-flex align-items-center mb-4 mb-md-0">
                    <img src={memoji} className="memoji" alt="Alan memoji" width={60} heigth={60}></img>
                    <div className="d-md-flex align-items-md-center mx-2">
                        <h1>Alan Silva</h1>
                        <Badge bg="primary" className="ms-md-2">Front-End</Badge> 
                    </div>
                </div>
                <Navbar.Toggle aria-controls="navbar-nav" className="mb-3 mb-md-0"/>
                <Navbar.Collapse id="navbar-nav" className="justify-content-md-end">
                    <Nav>
                        <Nav.Link href="https://www.linkedin.com/in/alanvieirads/" target="_blank">
                            <FaLinkedin className="icon-inline"/>{' '}
                            LinkedIn
                        </Nav.Link>
                        <Nav.Link href="https://github.com/alanvieirads/" target="_blank">
                            <FaGithub className="icon-inline"/>{' '}
                            GitHub
                        </Nav.Link>
                        <Nav.Link disabled>Portfolio (Soon)</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
  
export default Header  
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Badge from 'react-bootstrap/Badge';
import memoji1 from '../assets/img/memoji-1.webp'
import memoji2 from '../assets/img/memoji-2.webp'
import memoji3 from '../assets/img/memoji-3.webp'
import memoji4 from '../assets/img/memoji-4.webp'
import memoji5 from '../assets/img/memoji-5.webp'

function Header() {

    function getRandomNumber(min, max) {
        min = Math.ceil(min)
        max = Math.floor(max)
        return Math.floor(Math.random() * (max - min + 1)) + min
    }

    const memojiSelect = {
        1: memoji1,
        2: memoji2,
        3: memoji3,
        4: memoji4,
        5: memoji5,
    }

    const memoji = memojiSelect[getRandomNumber(1,5)];
  
    return (
        <Navbar bg="dark" variant="dark" expand="lg" className="py-3 mb-5">
            <Container className="d-block text-center d-md-flex text-md-start">
                <div className="presentation text-white d-md-flex align-items-center mb-4 mb-md-0">
                    <img src={memoji} className="memoji" alt="Alan memoji"></img>
                    <div className="presentation_info mx-4">
                        <h1>Alan Silva</h1>
                        <Badge bg="primary">Front-End</Badge> 
                        {' '}
                        <Badge bg="secondary">Guimarães, Braga, Portugal</Badge> 
                    </div>
                </div>
                <Navbar.Toggle aria-controls="navbar-nav" className="mb-3 mb-md-0"/>
                <Navbar.Collapse id="navbar-nav">
                    <Nav className="ms-md-auto text-white">
                        <Nav.Link href="https://www.linkedin.com/in/alanvieirads/" target="_blank"><i className="fa-brands fa-linkedin"></i> LinkedIn</Nav.Link>
                        <Nav.Link href="https://github.com/alanvieirads/" target="_blank"><i className="fa-brands fa-github"></i> GitHub</Nav.Link>
                        <Nav.Link disabled>Portfolio (Soon)</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
  
export default Header  
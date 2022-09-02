import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import { FaCommentDots, FaGithub, FaInstagram } from 'react-icons/fa'
import f1Car from '../assets/img/f1-car.webp'

function Cta() {
    return (
        <Row className="mb-5 cta">
            <Col xs={12} md={6}>
                <div className="bg-dark text-white rounded p-5 mb-3">
                    <div className="d-flex align-items-center mb-2">
                        <FaCommentDots className="cta_title-icon me-2"/>
                        <h4>Let´s talk</h4>
                    </div>
                    <p>I’m interested in freelance jobs, especially large projects.</p>
                    <div className="d-grid d-md-flex">
                        <Button variant="outline-light" href="https://www.linkedin.com/in/alanvieirads/" target="_blank">
                            👋 Say hello!
                        </Button>
                    </div>
                </div>
            </Col>
            <Col xs={12} md={6}>
                <div className="bg-dark text-white rounded p-5 mb-3">
                    <div className="d-flex align-items-center mb-2">
                        <FaInstagram className="cta_title-icon me-2"/>
                        <h4>@code.w.alan</h4>
                    </div>
                    <p>Coding tips and tricks on Instagram.</p>
                    <div className="d-grid d-md-flex">
                        <Button variant="outline-light" href="https://www.instagram.com/code.w.alan/" target="_blank">
                            👉 Go to feed!
                        </Button>
                    </div>
                </div>
            </Col>
            <Col xs={12}>
                <div className="bg-dark text-white text-md-center rounded p-5">
                    <div className="d-flex align-items-center justify-content-md-center mb-2">
                        <FaGithub className="cta_title-icon me-2"/>
                        <h4>Last project on GitHub</h4>
                    </div>
                    <div className="mb-4">
                        <Badge bg="primary">React</Badge>{' '} 
                        <Badge bg="secondary">HTML</Badge>{' '}
                        <Badge bg="secondary">CSS</Badge>{' '}
                        <Badge bg="secondary">Javascript</Badge>{' '}
                        <Badge bg="secondary">API Request</Badge>
                    </div>
                    <img src={f1Car} alt="F1 Car" width={206} height={61}/>
                    <h5>Formula 1</h5>
                    <p>A fictional project made to practice ReactJs.</p>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-center">
                        <Button variant="warning" href="https://alanvieirads.github.io/formula1/" target="_blank">
                            Live Preview
                        </Button>
                        <Button variant="outline-light" href="https://github.com/alanvieirads/formula1/" target="_blank">
                            View Source
                        </Button>
                    </div>
                </div>
            </Col>
        </Row>
    )
}
  
export default Cta
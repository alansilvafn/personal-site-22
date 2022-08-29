import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Car1 from '../assets/img/f1-car-1.webp'
import Car2 from '../assets/img/f1-car-2.webp'
import Car3 from '../assets/img/f1-car-3.webp'

function Cta() {
    return (
        <Row className="d-block mb-5 cta">
            <Col>
                <div className="bg-dark text-white rounded p-5 mb-3">
                    <div className="d-flex align-items-center cta_title mb-2">
                        <i className="fa-solid fa-comment-dots me-2"></i>
                        <h4>Let´s talk</h4>
                    </div>
                    <p>I’m interested in freelance opportunities, especially large projects.</p>
                    <Button variant="outline-light" href="https://www.linkedin.com/in/alanvieirads/" target="_blank">
                        👋 Say hello!
                    </Button>
                </div>
            </Col>
            <Col>
                <div className="bg-dark text-white rounded p-5 project">
                    <Row className="flex-md-row-reverse align-items-center">
                        <Col xs={12} md={6}>
                            <div className="race py-2 mb-5 mb-md-0">
                                <img src={Car1} className="img-fluid f1-car one" alt="F1 Car"/>
                                <img src={Car2} className="img-fluid f1-car two" alt="F1 Car"/>
                                <img src={Car3} className="img-fluid f1-car three" alt="F1 Car"/>
                                <span className="race_dashed-line"></span>
                            </div>
                        </Col>
                        <Col xs={12} md={6}>
                            <div className="d-flex align-items-center cta_title mb-2">
                                <i className="fa-brands fa-github me-2"></i>
                                <h4>Last project on GitHub</h4>
                            </div>
                            <div className="mb-4">
                                <Badge bg="primary">React</Badge>{' '} 
                                <Badge bg="secondary">HTML</Badge>{' '}
                                <Badge bg="secondary">CSS</Badge>{' '}
                                <Badge bg="secondary">Javascript</Badge>{' '}
                                <Badge bg="secondary">API Request</Badge>
                            </div>
                            <h5>Formula 1</h5>
                            <p>A fictive project made with the objective of training my ReactJS skills.</p>
                            <div className="d-grid d-sm-flex gap-2">
                                <Button variant="warning" href="https://alanvieirads.github.io/formula1/" target="_blank">
                                    Live Preview
                                </Button>
                                <Button variant="outline-light" href="https://github.com/alanvieirads/formula1/" target="_blank">
                                    View Source
                                </Button>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Col>
        </Row>
    )
}
  
export default Cta
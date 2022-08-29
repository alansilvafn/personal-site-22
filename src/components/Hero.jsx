import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import coffee from '../assets/img/coffee.webp'
import cv from '../assets/pdf/CV-Alan_William_Vieira_da_Silva-Front-end.pdf'
import tecCv from '../assets/pdf/Technical_CV-Alan_William_Vieira_da_Silva-Front-end.pdf'


function Hero() {
    return (
        <Row className="flex-md-row-reverse align-items-center mb-5">
            <Col xs={12} md={6} className="d-none d-md-block floating">
                <img src={coffee} className="img-fluid" alt="Coffe time"/>
            </Col>
            <Col xs={12} md={6}>
                <div className="text-center text-md-start">
                    <h2 className="display-5 fw-bold mb-3">About me</h2>
                    
                    <p className="lead">
                        Front End Developer with 8 years of experience building and maintaining websites. Proficient in HTML, CSS, JavaScript and PHP. Currently I learning more about ReactJS.
                    </p>

                    <div className="d-grid gap-2 d-lg-flex justify-content-lg-start">
                        <Button variant="warning" size="lg" href={cv} target="_blank" style={{"--fa-animation-iteration-count": 5}}>
                            <i className="fa-solid fa-circle-arrow-down fa-bounce"></i>{' '}
                            Download CV
                        </Button>
                        <Button variant="secondary" size="lg" href={tecCv} target="_blank">
                            Technical CV
                        </Button>
                    </div>
                </div>
            </Col>
        </Row>
    )
}
  
export default Hero  
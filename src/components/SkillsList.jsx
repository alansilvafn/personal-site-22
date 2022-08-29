import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Skill from './Skill';

function SkillsList() {
  
    return (
        <Row className="mb-5">
            <Col xs={12}>
                <h2 className="display-5 fw-bold text-center">Main skills & tools</h2>
            </Col>
            <Skill icon="fa-brands fa-html5" name="Html"/>
            <Skill icon="fa-brands fa-css3" name="CSS"/>
            <Skill icon="fa-brands fa-js" name="JavaScript"/>
            <Skill icon="fa-brands fa-react" name="React"/>
            <Skill icon="fa-brands fa-php" name="PHP"/>
            <Skill icon="fa-solid fa-database" name="MySql"/>
            <Skill icon="fa-brands fa-wordpress" name="Wordpress"/>
            <Skill icon="fa-brands fa-git-alt" name="Git"/>
            <Skill icon="fa-brands fa-sass" name="Sass"/>
            <Skill icon="fa-brands fa-bootstrap" name="Bootstrap"/>
            <Skill icon="fa-solid fa-laptop-code" name="Vs Code"/>
            <Skill icon="fa-brands fa-trello" name="Trello"/>
        </Row>
    )
}
  
export default SkillsList
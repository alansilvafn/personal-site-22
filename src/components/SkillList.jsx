import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { FaHtml5, FaCss3, FaJs, FaReact, FaPhp, FaDatabase, FaWordpress, FaGitAlt, FaSass, FaBootstrap, FaTrello } from 'react-icons/fa'
import { SiVisualstudiocode } from 'react-icons/si'

const skills =  [
    {name: 'Html', icon: <FaHtml5/>},
    {name: 'Css', icon: <FaCss3/>},
    {name: 'JavaScript', icon: <FaJs/>},
    {name: 'React', icon: <FaReact/>},
    {name: 'PHP', icon: <FaPhp/>},
    {name: 'MySql', icon: <FaDatabase/>},
    {name: 'Wordpress', icon: <FaWordpress/>},
    {name: 'Git', icon: <FaGitAlt/>},
    {name: 'Sass', icon: <FaSass/>},
    {name: 'Bootstrap', icon: <FaBootstrap/>},
    {name: 'Vs Code', icon: <SiVisualstudiocode/>},
    {name: 'Trello', icon: <FaTrello/>},
]

function SkillList() {
  
    return (
        <Row className="mb-5">
            <Col xs={12}>
                <h2 className="display-5 fw-bold text-center">Main skills & tools</h2>
            </Col>
            {
                skills.map ((skill) => {
                    return (
                        <Col key={skill.name} xs={6} sm={6} md={4} lg={2}>
                            <div className="skill text-center p-4">
                                {skill.icon}
                                <h3 className="fw-bold">{skill.name}</h3>
                            </div>
                        </Col>
                    )
                })
            }
        </Row>
    )
}
  
export default SkillList
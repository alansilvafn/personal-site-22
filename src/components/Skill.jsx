import Col from 'react-bootstrap/Col'

function Skill(props) {
    const icon = props.icon
    const name = props.name;
    
    return (
        <Col xs={12} sm={6} md={4} lg={2}>
            <div className="skill text-center p-4">
                <i className={ `skill_icon mb-2 ${icon}` } ></i>
                <h3 className="fw-bold">{name}</h3>
            </div>
        </Col>
    )
}
  
export default Skill
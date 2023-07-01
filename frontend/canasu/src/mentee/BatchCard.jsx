import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import img from "./mentoring.png"
import "../styles/MentorDashboard.css"
import { useNavigate } from "react-router-dom";


function BatchCard() {
  const navigate=useNavigate();
  const handleMenteeClick = () => {
    navigate("/student/id");
  };
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title><h3>Course Name</h3><br/></Card.Title>
        <Card.Text>
          <h6>Mentor Name</h6>
          <h6>Course Name</h6>
          <button className='student_joinbtn'> <h4 className='joinbtn'>Join</h4></button>

        </Card.Text>
        <Button variant="primary" onClick={handleMenteeClick}>Check modules</Button>
      </Card.Body>
    </Card>
  );
}

export default BatchCard;
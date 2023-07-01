import Card from 'react-bootstrap/Card';
import img from "./mentoring.png";
import "../styles/MentorDashboard.css";
import { Link } from 'react-router-dom';


function BatchCard({batch, idx}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title><h3>Batch {idx}</h3><br/></Card.Title>
        <Card.Text>
          <h6>{batch?.mentee?.name}</h6>
          <h6>{batch?.mentor?.name}</h6>

        </Card.Text>
        <Link to={`/student/batch/${batch._id}`} variant="primary" style={{textDecoration:"none"}}> Check Modules </Link>
      </Card.Body>
    </Card>
  );
}

export default BatchCard;
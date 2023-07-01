import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import img from "./mentoring.png"


function BatchCard() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title><h2>Batch 1</h2><br/></Card.Title>
        <Card.Text>
          <h6>Mentee Name</h6>
          <h6>Course Name</h6>

        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default BatchCard;
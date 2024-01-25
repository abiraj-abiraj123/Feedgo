import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import img1 from '../Assets/Images/img7.png';
import img2 from '../Assets/Images/img8.png';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Cards.css';
import { useNavigate } from 'react-router-dom';

function Cards() {
  const navigate=useNavigate();
  return (
    <>
    <div className="text">
    <Row>
      <Col className="cont1">
    <Card style={{ width: '18rem' }} className='card1'>
      <Card.Img className='i1' variant="top" src={img1} />
      <Card.Body>
        <Card.Title className='title1'>Feedback</Card.Title>
        <div className="bt1"><button className='bn1' onClick={()=>navigate("feedback")}>Go to Feedback</button></div>
      </Card.Body>
    </Card>
    </Col>

    <Col className="cont2">
    <Card style={{ width: '18rem' }} className='card2'>
      <Card.Img className='i2' variant="top" src={img2} />
      <Card.Body>
        <Card.Title className='title2'>Survey</Card.Title>
        <div className="bt1"><button  className='bn2' onClick={()=>navigate("survey")}>Go to Survey</button></div>
      </Card.Body>
    </Card>
    </Col>
    </Row>
    </div>
    </>
  );
}

export default Cards;
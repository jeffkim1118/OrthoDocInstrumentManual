import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function CardDisplay({setUp}:any){
    return (
      <div className='home-card-content'>
        <Card style={{ width: "18rem", display: "flex"}}>
          <Card.Img variant="top" src={setUp['image']}/>
          <Card.Body>
            <Card.Title><em>{setUp['name']}</em></Card.Title>
            <Card.Text>
              <em>{setUp['desc']}</em>
            </Card.Text>
            <Button variant="primary">Go</Button>
          </Card.Body>
        </Card>
      </div>
    );
}
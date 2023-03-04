import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Carousel from "react-bootstrap";

export default function CardDisplay({setUp, indx}:any){
    // const names = ["Adjustment", "Aligner Band", "Deband", "Hawley Check"];
    // console.log(typeof image)
    // console.log(Object.keys(image))
    console.log(setUp['name'])
    return (
      
      <div className='home-card-content'>
        <Card style={{ width: "18rem", display: "flex"}}>
          <Card.Img variant="top" src={setUp['image']}/>
          <Card.Body>
            <Card.Title>{setUp['name']}</Card.Title>
            <Card.Text>
              {setUp['desc']}
            </Card.Text>
            <Button variant="primary">Go</Button>
          </Card.Body>
        </Card>
      </div>
    );
}
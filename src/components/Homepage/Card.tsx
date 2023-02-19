import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function CardDisplay({image, indx}:any){
    const names = ["Adjustment", "Aligner Band", "Deband", "Hawley Check"];
    // console.log(typeof image)
    // console.log(Object.keys(image))
    return (
      <div className='home-card-content'>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={image}/>
          <Card.Body>
            <Card.Title>{names[indx]}</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go</Button>
          </Card.Body>
        </Card>
      </div>
    );
}
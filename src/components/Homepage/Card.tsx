import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function CardDisplay({ setUp }: any) {
  return (
    <div className="home-card-content">
      <Card>
        <Card.Img variant="top" src={setUp["image"]} />
        <Card.Body>
          <div className="card-content-detail">
            <Card.Title>
              <em>{setUp["name"]}</em>
            </Card.Title>
            <Card.Text>
              <em>{setUp["desc"]}</em>
            </Card.Text>
          </div>
          <div className="btn-right" >
            <Button
              variant="primary"
              href={setUp["link"]}
              data-testid="Card-btn"
            >
              Go
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

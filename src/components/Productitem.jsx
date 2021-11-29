import { Card, Row, Col } from "react-bootstrap";
import "./Productitem.css";
export const Product = ({ title, price, quantity, desc, Url }) => {
  return (
    <Row className="item">
      <Col>
        <img src={Url} alt="" height="120px" width="180px" />
      </Col>
      <Col>
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{title}</Card.Subtitle>
            <Card.Text>{desc}</Card.Text>
            <Card.Link href="#">{price}</Card.Link>
            <Card.Link href="#">{quantity}</Card.Link>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

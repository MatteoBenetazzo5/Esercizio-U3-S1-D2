import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import books from "../data/fantasy.json"

const AllTheBooks = () => {
  return (
    <Container className="mb-5">
      <Row className="g-4">
        {books.map((book) => {
          return (
            <Col xs={12} sm={6} md={4} lg={3} key={book.asin}>
              <Card className="h-100 card-blue-border">
                <Card.Img variant="top" src={book.img} />
                <Card.Body>
                  <Card.Title className="fs-6">{book.title}</Card.Title>
                  <Card.Text>€ {book.price}</Card.Text>
                  <Button variant="warning">ACQUISTA!!</Button>
                  <Button variant="outline-dark">
                    <i className="bi bi-trash"></i>
                  </Button>
                  <Button variant="outline-success">
                    <i className="bi bi-check-lg"></i>
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          )
        })}
      </Row>
    </Container>
  )
}

export default AllTheBooks

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"
import books from "../data/fantasy.json"

const AllTheBooks = () => {
  return (
    <Container className="mb-5">
      <Row className="g-4">
        {books.map((book) => {
          return (
            <Col xs={12} sm={6} md={4} lg={3} key={book.asin}>
              <Card className="h-100">
                <Card.Img variant="top" src={book.img} />
                <Card.Body>
                  <Card.Title className="fs-6">{book.title}</Card.Title>
                  <Card.Text>€ {book.price}</Card.Text>
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

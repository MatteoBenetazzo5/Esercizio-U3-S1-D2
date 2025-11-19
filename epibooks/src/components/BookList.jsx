import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import SingleBook from "./SingleBook"

const BookList = (props) => {
  
  return (
    <Container className="mb-5">
      <Row className="g-4">
        {props.books.map((book) => (
          <Col xs={12} sm={6} md={4} lg={3} key={book.asin}>
            <SingleBook book={book} />
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default BookList

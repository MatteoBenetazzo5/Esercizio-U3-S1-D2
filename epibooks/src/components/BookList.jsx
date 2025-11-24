// BookList.jsx
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import SingleBook from "./SingleBook"
import CommentArea from "./CommentArea"

const BookList = (props) => {
  return (
    <Container className="mb-5">
      <Row>
        {/* COLONNA SINISTRA - GRID LIBRI */}
        <Col md={8}>
          <Row className="g-4">
            {props.books.map((book) => (
              <Col xs={12} sm={6} md={4} lg={3} key={book.asin}>
                <SingleBook
                  book={book}
                  selectedAsin={props.selectedAsin}
                  changeSelectedAsin={props.changeSelectedAsin}
                />
              </Col>
            ))}
          </Row>
        </Col>

        {/* COLONNA DESTRA - COMMENT AREA */}
        <Col md={4}>
          <CommentArea asin={props.selectedAsin} />
        </Col>
      </Row>
    </Container>
  )
}

export default BookList

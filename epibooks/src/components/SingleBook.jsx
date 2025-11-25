// TIPO DI SCRITTURA MODERNO CON useState e useEffect
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"

const SingleBook = function (props) {
  const { book } = props

  const isSelected = props.selectedAsin === book.asin

  return (
    <Card
      className={
        "h-100 mb-2 card-blue-border " +
        (isSelected ? "border border-danger border-3" : "")
      }
    >
      <Card.Img
        variant="top"
        src={book.img}
        onClick={() => props.changeSelectedAsin(book.asin)}
        style={{ cursor: "pointer" }}
      />

      <Card.Body>
        <Card.Title className="fs-6">{book.title}</Card.Title>
        <Card.Text>€ {book.price}</Card.Text>

        <div className="d-flex flex-wrap gap-2 mt-2">
          <Button variant="warning">ACQUISTA!!</Button>
          <Button variant="outline-dark">
            <i className="bi bi-trash"></i>
          </Button>
          <Button variant="outline-success">
            <i className="bi bi-check-lg"></i>
          </Button>
        </div>
      </Card.Body>
    </Card>
  )
}

export default SingleBook

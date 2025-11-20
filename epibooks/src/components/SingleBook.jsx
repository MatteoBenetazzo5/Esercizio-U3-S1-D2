import { Component } from "react"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import CommentArea from "./CommentArea"

class SingleBook extends Component {
  state = {
    selected: false,
  }

  toggleSelected = () => {
    this.setState({
      selected: !this.state.selected,
    })
  }

  render() {
    const { book } = this.props

    return (
      <>
        <Card
          className={
            "h-100 mb-2 card-blue-border" +
            (this.state.selected ? "border border-danger border-3" : "")
          }
        >
          <Card.Img
            variant="top"
            src={book.img}
            onClick={this.toggleSelected}
            style={{ cursor: "pointer" }}
          />

          <Card.Body>
            <Card.Title className="fs-6">{book.title}</Card.Title>
            <Card.Text>€ {book.price}</Card.Text>
            <div className="d-flex flex-wrap gap-2 mt-2">
              {/* ACQUISTA */}
              <Button variant="warning">ACQUISTA!!</Button>

              {/* CESTINO */}
              <Button variant="outline-dark">
                <i className="bi bi-trash"></i>
              </Button>

              {/* SPUNTA VERDE */}
              <Button variant="outline-success">
                <i className="bi bi-check-lg"></i>
              </Button>
            </div>
          </Card.Body>
        </Card>

        {this.state.selected && (
          <div className="mb-3">
            <CommentArea asin={book.asin} />
          </div>
        )}
      </>
    )
  }
}

export default SingleBook

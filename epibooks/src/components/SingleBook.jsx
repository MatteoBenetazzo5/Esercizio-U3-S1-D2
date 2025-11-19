import { Component } from "react"
import Card from "react-bootstrap/Card"

class SingleBook extends Component {
  state = {
    // di default il libro NON è selezionato
    selected: false,
  }

  // metodo che fa il toggle dello stato
  toggleSelected = () => {
    this.setState({
      selected: !this.state.selected,
    })
  }

  render() {
    // estraggo l’oggetto libro dalle props
    const { book } = this.props
    return (
      <Card
        className={
          "h-100" + (this.state.selected ? "border border-danger border-3" : "")
        }
      >
        <Card.Img
          variant="top"
          src={book.img}
          onClick={this.toggleSelected} //CLICK sulla copertina
          style={{ cursor: "pointer" }}
        />
        <Card.Body>
          <Card.Title className="fs-6">{book.title}</Card.Title>
          <Card.Text>€ {book.price}</Card.Text>
        </Card.Body>
      </Card>
    )
  }
}

export default SingleBook

// CommentArea.jsx
import { Component } from "react"
import { Spinner, Alert } from "react-bootstrap"
import CommentsList from "./CommentsList"

const AUTH_TOKEN =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTI0NGRmNmRiYzJkODAwMTVmMDAxNTgiLCJpYXQiOjE3NjM5ODY5MzUsImV4cCI6MTc2NTE5NjUzNX0.WDjGpqslR0IgFsgH1pGYtohfCRiu4SlGdlUCGEq99-8"

class CommentArea extends Component {
  state = {
    comments: [],
    loading: false,
    error: false,
  }

  getComments = () => {
    fetch(
      "https://striveschool-api.herokuapp.com/api/comments/" + this.props.asin,
      {
        headers: {
          Authorization: AUTH_TOKEN,
        },
      }
    )
      .then((response) => {
        if (response.ok) return response.json()
        else throw new Error("Errore nel recupero")
      })
      .then((commentsArray) => {
        this.setState({
          comments: commentsArray,
          loading: false,
          error: false,
        })
      })
      .catch(() => {
        this.setState({ loading: false, error: true })
      })
  }

  componentDidUpdate(prevProps) {
    if (prevProps.asin !== this.props.asin) {
      if (this.props.asin) {
        this.setState({ loading: true, error: false })
        this.getComments()
      }
    }
  }

  render() {
    if (!this.props.asin) {
      return (
        <Alert variant="info">Seleziona un libro per vedere i commenti</Alert>
      )
    }

    return (
      <div className="mt-2">
        {this.state.loading && (
          <div className="text-center">
            <Spinner animation="border" variant="primary" />
          </div>
        )}

        {!this.state.loading && this.state.error && (
          <Alert variant="danger">Errore nel caricamento dei commenti</Alert>
        )}

        {!this.state.loading && !this.state.error && (
          <CommentsList comments={this.state.comments} />
        )}
      </div>
    )
  }
}

export default CommentArea

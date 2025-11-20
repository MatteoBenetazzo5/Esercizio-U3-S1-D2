import { Component } from "react"
import { Spinner, Alert } from "react-bootstrap"
import CommentsList from "./CommentsList"

const AUTH_TOKEN =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTFmMTcwMjIzZTc0MDAwMTVmN2ZkY2YiLCJpYXQiOjE3NjM2NDUxODYsImV4cCI6MTc2NDg1NDc4Nn0.ol3EyfVLP3BkFOZf3wQ4P3LQmgI4PJa6gjJISCapoNA"

class CommentArea extends Component {
  state = {
    comments: [],
    loading: true,
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
        })
      })
      .catch(() => {
        this.setState({ loading: false, error: true })
      })
  }

  componentDidMount() {
    this.getComments()
  }

  render() {
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

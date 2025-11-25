// TIPO DI SCRITTURA MODERNO CON useState e useEffect
import { useState, useEffect } from "react"
import { Spinner, Alert } from "react-bootstrap"
import CommentsList from "./CommentsList"

const AUTH_TOKEN =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTI0NGRmNmRiYzJkODAwMTVmMDAxNTgiLCJpYXQiOjE3NjM5ODY5MzUsImV4cCI6MTc2NTE5NjUzNX0.WDjGpqslR0IgFsgH1pGYtohfCRiu4SlGdlUCGEq99-8"

const CommentArea = function (props) {
  // STATE DEL COMPONENTE (hook)
  const [comments, setComments] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  // FUNZIONE PER RECUPERARE I COMMENTI
  const getComments = () => {
    fetch("https://striveschool-api.herokuapp.com/api/comments/" + props.asin, {
      headers: {
        Authorization: AUTH_TOKEN,
      },
    })
      .then((response) => {
        if (response.ok) return response.json()
        else throw new Error("Errore nel recupero")
      })
      .then((commentsArray) => {
        // successo nel recupero dei commenti
        setComments(commentsArray)
        setLoading(false)
        setError(false)
      })
      .catch(() => {
        // errore nel recupero
        setLoading(false)
        setError(true)
      })
  }

  // useEffect = componentDidUpdate
  // si attiva ogni volta che CAMBIA props.asin
  useEffect(() => {
    // se non ho un asin selezionato, NON recupero nulla
    if (!props.asin) return

    // preparo il caricamento
    setLoading(true)
    setError(false)

    // recupero dei commenti
    getComments()
  }, [props.asin])

  // RENDER DEL COMPONENTE
  if (!props.asin) {
    return (
      <Alert variant="info">Seleziona un libro per vedere i commenti</Alert>
    )
  }

  return (
    <div className="mt-2">
      {/* FASE DI CARICAMENTO */}
      {loading && (
        <div className="text-center">
          <Spinner animation="border" variant="primary" />
        </div>
      )}

      {/* FASE DI ERRORE */}
      {!loading && error && (
        <Alert variant="danger">Errore nel caricamento dei commenti</Alert>
      )}

      {/* LISTA COMMENTI */}
      {!loading && !error && <CommentsList comments={comments} />}
    </div>
  )
}

export default CommentArea

// TIPO DI SCRITTURA CLASSICA CON LE CLASSI
// import { Component } from "react"
// import { Spinner, Alert } from "react-bootstrap"
// import CommentsList from "./CommentsList"

// const AUTH_TOKEN =
// "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTI0NGRmNmRiYzJkODAwMTVmMDAxNTgiLCJpYXQiOjE3NjM5ODY5MzUsImV4cCI6MTc2NTE5NjUzNX0.WDjGpqslR0IgFsgH1pGYtohfCRiu4SlGdlUCGEq99-8"

// class CommentArea extends Component {
// state = {
// comments: [],
// loading: false,
// error: false,
// }

// getComments = () => {
// fetch(
// "https://striveschool-api.herokuapp.com/api/comments/" + this.props.asin,
// {
// headers: {
// Authorization: AUTH_TOKEN,
// },
// }
// )
// .then((response) => {
// if (response.ok) return response.json()
// else throw new Error("Errore nel recupero")
// })
// .then((commentsArray) => {
// this.setState({
// comments: commentsArray,
// loading: false,
// error: false,
// })
// })
// .catch(() => {
// this.setState({ loading: false, error: true })
// })
// }

// componentDidUpdate(prevProps) {
// if (prevProps.asin !== this.props.asin) {
// if (this.props.asin) {
// this.setState({ loading: true, error: false })
// this.getComments()
// }
// }
// }

// render() {
// if (!this.props.asin) {
// return (
// <Alert variant="info">Seleziona un libro per vedere i commenti</Alert>
// )
// }

// return (
// <div className="mt-2">
// {this.state.loading && (
// <div className="text-center">
// {/* <Spinner animation="border" variant="primary" /> */}
// </div>
// )}

// {!this.state.loading && this.state.error && (
// <Alert variant="danger">Errore nel caricamento dei commenti</Alert>
// )}

// {!this.state.loading && !this.state.error && (
// <CommentsList comments={this.state.comments} />
// )}
// </div>
// )
// }
// }

// export default CommentArea

import { useState, useEffect } from "react"
import { Spinner, Alert } from "react-bootstrap"
import CommentsList from "./CommentsList"

const AUTH_TOKEN =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTI0NGRmNmRiYzJkODAwMTVmMDAxNTgiLCJpYXQiOjE3NjM5ODY5MzUsImV4cCI6MTc2NTE5NjUzNX0.WDjGpqslR0IgFsgH1pGYtohfCRiu4SlGdlUCGEq99-8"

const CommentArea = function (props) {
  const [comments, setComments] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

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
        setComments(commentsArray)
        setLoading(false)
        setError(false)
      })
      .catch(() => {
        setLoading(false)
        setError(true)
      })
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (!props.asin) return

    setLoading(true)
    setError(false)

    getComments()
  }, [props.asin])

  if (!props.asin) {
    return (
      <Alert variant="info">Seleziona un libro per vedere i commenti</Alert>
    )
  }

  return (
    <div className="mt-2">
      {loading && (
        <div className="text-center">
          <Spinner animation="border" variant="primary" />
        </div>
      )}

      {!loading && error && (
        <Alert variant="danger">Errore nel caricamento dei commenti</Alert>
      )}

      {!loading && !error && <CommentsList comments={comments} />}
    </div>
  )
}

export default CommentArea

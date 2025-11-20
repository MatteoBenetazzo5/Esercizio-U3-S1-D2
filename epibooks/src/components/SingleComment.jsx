import { ListGroup } from "react-bootstrap"

const SingleComment = ({ comment }) => {
  return (
    <ListGroup.Item>
      {comment.author} — {comment.comment} ⭐{comment.rate}
    </ListGroup.Item>
  )
}

export default SingleComment

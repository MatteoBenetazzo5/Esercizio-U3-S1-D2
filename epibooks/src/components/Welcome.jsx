import Container from "react-bootstrap/Container"
import Alert from "react-bootstrap/Alert"

const Welcome = () => {
  return (
    <Container className="mt-4">
      <Alert variant="info">
        <Alert.Heading>Benvenuto su EpiBooks!</Alert.Heading>
        <p>Il tuo negozio di libri preferito!!!</p>
      </Alert>
      <h2 className="mb-4">Sfoglia le nostre proposte</h2>
    </Container>
  )
}

export default Welcome

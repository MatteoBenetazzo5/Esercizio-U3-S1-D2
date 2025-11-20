import Container from "react-bootstrap/Container"
import Alert from "react-bootstrap/Alert"

const Welcome = () => {
  return (
    <Container className="mt-4 text-center">
      <Alert variant="info" className="mb-5 ">
        <Alert.Heading>Benvenuto su EpiBooks!</Alert.Heading>
        <p>Il tuo negozio di libri preferito!!!</p>
      </Alert>
      <h2 className="mb-5 text-white" >Nuove Offerte che ti aspettano!!!</h2>
    </Container>
  )
}

export default Welcome

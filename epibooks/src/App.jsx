import "bootstrap/dist/css/bootstrap.min.css"
import MyNav from "./components/MyNav"
import MyFooter from "./components/MyFooter"
import Welcome from "./components/Welcome"
import AllTheBooks from "./components/AllTheBooks"
import BookList from "./components/BookList"
import fantasyBooks from "./data/fantasy.json"

function App() {
  return (
    <>
      <MyNav />
      <main>
        <Welcome />
        {/* <AllTheBooks /> */}
        {/* modifiche di oggi */}
        <BookList books={fantasyBooks} />
      </main>
      <MyFooter />
    </>
  )
}

export default App

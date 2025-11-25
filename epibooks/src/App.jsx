import "bootstrap/dist/css/bootstrap.min.css"
import MyNav from "./components/MyNav"
import MyFooter from "./components/MyFooter"
import Welcome from "./components/Welcome"
import BookList from "./components/BookList"
import fantasyBooks from "./data/fantasy.json"
import { useState } from "react"

const App = function () {
  // STATO con useState
  const [selectedAsin, setSelectedAsin] = useState(null)

  // funzione per aggiornare lo stato
  const changeSelectedAsin = (asin) => {
    setSelectedAsin(asin)
  }

  return (
    <>
      <MyNav />
      <main>
        <Welcome />
        <BookList
          books={fantasyBooks}
          selectedAsin={selectedAsin}
          changeSelectedAsin={changeSelectedAsin}
        />
      </main>
      <MyFooter />
    </>
  )
}

export default App

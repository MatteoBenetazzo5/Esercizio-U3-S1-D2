// App.jsx
import "bootstrap/dist/css/bootstrap.min.css"
import MyNav from "./components/MyNav"
import MyFooter from "./components/MyFooter"
import Welcome from "./components/Welcome"
import BookList from "./components/BookList"
import fantasyBooks from "./data/fantasy.json"
import { Component } from "react"

class App extends Component {
  state = {
    selectedAsin: null,
  }

  changeSelectedAsin = (asin) => {
    this.setState({ selectedAsin: asin })
  }

  render() {
    return (
      <>
        <MyNav />
        <main>
          <Welcome />
          <BookList
            books={fantasyBooks}
            selectedAsin={this.state.selectedAsin}
            changeSelectedAsin={this.changeSelectedAsin}
          />
        </main>
        <MyFooter />
      </>
    )
  }
}

export default App

import { render, screen } from "@testing-library/react"
import { describe, it, expect } from "vitest"
import BookList from "../components/BookList"
import fantasyBooks from "../data/fantasy.json"

describe("Testing BookList", () => {
  it("renders the correct number of cards", () => {
    render(
      <BookList
        books={fantasyBooks}
        selectedAsin={null}
        changeSelectedAsin={() => {}}
      />
    )

    const cards = screen.getAllByTestId("book-img")
    expect(cards).toHaveLength(fantasyBooks.length)
  })
})

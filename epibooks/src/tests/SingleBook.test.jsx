import { render, screen } from "@testing-library/react"
import { describe, it, expect } from "vitest"
import SingleBook from "../components/SingleBook"
import fantasyBooks from "../data/fantasy.json"

describe("Testing SingleBook selection", () => {
  it("highlights book when selected", () => {
    const mockSetter = () => {}

    render(
      <SingleBook
        book={fantasyBooks[0]}
        selectedAsin={fantasyBooks[0].asin}
        changeSelectedAsin={mockSetter}
      />
    )

    const card = screen.getByTestId("single-book-card")
    expect(card.className).toContain("border-danger")
  })

  it("changes selection when clicking another book", () => {
    let selected = fantasyBooks[0].asin
    const mockSetter = (asin) => (selected = asin)

    const { rerender } = render(
      <SingleBook
        book={fantasyBooks[0]}
        selectedAsin={selected}
        changeSelectedAsin={mockSetter}
      />
    )

    rerender(
      <SingleBook
        book={fantasyBooks[1]}
        selectedAsin={fantasyBooks[1].asin}
        changeSelectedAsin={mockSetter}
      />
    )

    const card = screen.getByTestId("single-book-card")
    expect(card.className).toContain("border-danger")
  })
})

import { render, screen } from "@testing-library/react"
import { describe, it, expect } from "vitest"
import CommentArea from "../components/CommentArea"

describe("Testing CommentArea component", () => {
  it("shows info alert if no asin is selected", () => {
    render(<CommentArea asin={null} />)
    const alert = screen.getByText(/seleziona un libro/i)
    expect(alert).toBeInTheDocument()
  })
})

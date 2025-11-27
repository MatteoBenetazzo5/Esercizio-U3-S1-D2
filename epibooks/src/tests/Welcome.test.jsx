import { render, screen } from "@testing-library/react"
import { describe, it, expect } from "vitest"
import Welcome from "../components/Welcome"

describe("Testing Welcome component", () => {
  it("renders heading correctly", () => {
    render(<Welcome />)
    const heading = screen.getByText(/benvenuto su epibooks/i)
    expect(heading).toBeInTheDocument()
  })

  it("renders description text", () => {
    render(<Welcome />)
    const text = screen.getByText(/negozio di libri/i)
    expect(text).toBeInTheDocument()
  })
})

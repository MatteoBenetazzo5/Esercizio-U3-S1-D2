import { render, screen } from "@testing-library/react"
import { describe, it, expect, vi } from "vitest"
import CommentArea from "../components/CommentArea"

const fakeComments = [
  { _id: "1", author: "Mario", comment: "Ottimo libro", rate: 5 },
  { _id: "2", author: "Anna", comment: "Molto bello", rate: 4 },
]

describe("Testing comments load", () => {
  it("loads comments correctly", async () => {
    globalThis.fetch = vi.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(fakeComments),
      })
    )

    render(<CommentArea asin="12345" />)

    const commentItems = await screen.findAllByTestId("single-comment")
    expect(commentItems).toHaveLength(fakeComments.length)
  })
})

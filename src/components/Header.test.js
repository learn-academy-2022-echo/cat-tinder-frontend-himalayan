import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import userEvent from "@testing-library/user-event"
import Header from "./Header"

describe("<Header />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div")
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
      div
    )
  })
  it("renders a logo with a src and alt", () => {
    const div = document.createElement("div")
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
      div
    )
    const logo = screen.getByRole("img")
    expect(logo).toHaveAttribute("src", "CHANGETHIS-logo.png")
    expect(logo).toHaveAttribute("alt", "CHANGE THIS")
  })
  it("has clickable links", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    )
    userEvent.click(screen.getByText("CHANGE THIS Meet the Cats"))
    expect(screen.getByText("CHANGE THIS Meet the Cats")).toBeInTheDocument()
    userEvent.click(screen.getByText("CHANGE THIS Add a New Cat"))
    expect(screen.getByText("CHANGE THIS Add a New Cat")).toBeInTheDocument()
    userEvent.click(screen.getByText("CHANGE THIS Adopt a Cat!"))
    expect(screen.getByText("CHANGE THIS Adopt a Cat!")).toBeInTheDocument()
  })
})


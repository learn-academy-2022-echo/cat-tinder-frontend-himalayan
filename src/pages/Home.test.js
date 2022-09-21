import { render, screen } from "@testing-library/react"
import Home from "./Home"

describe("<Home />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div")
    render(<Home />, div)
  })
  it("checks for welcome message", () => {
    render(<Home />)
    const showLink = screen.getByText(/Pelican Town/i)
    expect(showLink).toBeInTheDocument()
  })
})
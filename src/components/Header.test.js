import { screen, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BrowserRouter } from "react-router-dom";
import Header from './Header'


describe("<Header/>", () => {
  test("Header renders without error", () => {
    render(<Header />)
    const indexLink = screen.getByText(/Index/i)
    expect(indexLink).toBeInTheDocument()
  })
  test("has clickable links", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    )
    userEvent.click(screen.getByText("Index"))
    expect(screen.getByText("Index")).toBeInTheDocument()
    userEvent.click(screen.getByText("New"))
    expect(screen.getByText("New")).toBeInTheDocument()

  })
})